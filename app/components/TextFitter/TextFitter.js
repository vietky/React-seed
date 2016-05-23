import React, {
  PropTypes
} from 'react';

const LINE_HEIGHT = 25;
const DOT_3 = '...';

class TextFitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text + props.moreInfo,
    };
    this._process = this._process.bind(this);
    this._getVisualHeight = this._getVisualHeight.bind(this);
    this._test = this._test.bind(this);
  }
  componentDidMount() {
    if (this._getVisualHeight() > LINE_HEIGHT) {
      this._process();
    }
    const { autoResize } = this.props;
    if (autoResize) {
      window.addEventListener('resize', this._process);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this._process);
  }
  _getVisualHeight() {
    return this.refs.ruler.offsetHeight;
  }
  _process() {
    const lo = 0;
    const hi = this.props.text.length;
    this._test(lo, hi, LINE_HEIGHT);
  }
  _test(lo, hi, lineHeight = LINE_HEIGHT) {
    const len = parseInt(lo + (hi - lo + 1) / 2, 10);
    this.setState({
      text: this._getTrimmedText(len)
    }, () => {
      if (lo >= hi) {
        return;
      }
      const visualHeight = this._getVisualHeight();
      if (visualHeight <= lineHeight) {
        // if it's ok, try with more characters
        this._test(len, hi, lineHeight);
      } else {
        // not ok, need to cut characters
        this._test(lo, len - 1, lineHeight);
      }
    });
  }
  _getTrimmedText(len) {
    const { moreInfo, text } = this.props;
    let displayedText = text.substring(0, len - DOT_3.length) + DOT_3;
    if (displayedText.length >= text.length) {
      displayedText = text;
    }
    return `${displayedText}${moreInfo}`;
  }
  render() {
    const style = require('./TextFitter.scss');

    return (
      <div>
        <span ref="ruler" className={`${style.ruler}`}>
          { this.state.text }
        </span>
      </div>
    );
  }
}

TextFitter.propTypes = {
  text: PropTypes.string.isRequired,
  moreInfo: PropTypes.string,
  autoResize: PropTypes.bool
};

TextFitter.defaultProps = {
  autoResize: true
};

export default TextFitter;
