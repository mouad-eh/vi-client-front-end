import React from 'react';

const HelpDropdown = () => {
    const openHelpPage = () => {
        const helpPageLink = "https://www.vi-client.com/aide/index.php"
        window.open(helpPageLink, "_blank");
    }
    return (
        <React.Fragment>
            <div className="ms-1 header-item d-none d-sm-flex">
                <button
                    onClick={openHelpPage}
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                >
                    <i className="bx bx-help-circle fs-22"></i>
                </button>
            </div>
        </React.Fragment>
    );
};

export default HelpDropdown;