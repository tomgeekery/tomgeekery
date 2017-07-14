import React from "react";

export default class HomepagePreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    let image = getAsset(entry.getIn(["data", "hero", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="mw7 center ph3">
          <div className="db mb3">
            <div className="mw7 relative bg-fix-primary mb3">
              <h1 className="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
                { entry.getIn(["data", "hero", "headline"]) }
              </h1>
            </div>
            <div className="mw7 relative bg-fix-primary">
              <p className="b f4 di lh-title mb3 white mw6 bg-primary">
                { entry.getIn(["data", "hero", "subtitle"]) }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
