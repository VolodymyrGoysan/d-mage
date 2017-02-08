(function ComponentsDraggablePanelHeadingModule() {
  const Heading = ({ heading }) => {
    if (!heading) return;

    return (
      <div className="panel-heading panel-draggable__heading">
        {heading}
      </div>
    );
  }

  Heading.propTypes = {

  };

  Heading.defaultProps = {

  };

  Components.DraggablePanel.Heading = Heading;
})();
