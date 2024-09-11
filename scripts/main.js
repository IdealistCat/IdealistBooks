import { VERSION, getDumbAssCommit } from "./utils/global.js";

const version_placeholder = "phase.major.minor_patch";

var versionElement = document.createElement('p');
versionElement.id = 'version_text';
versionElement.innerHTML = VERSION;

document.body.prepend(versionElement);

// getDumbAssCommit();