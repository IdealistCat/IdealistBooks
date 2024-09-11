const version_placeholder = "phase.major.minor_patch";
var versionElement = document.createElement('p');
versionElement.innerHTML = version_placeholder+'<br>';

document.body.prepend(versionElement);