const version_placeholder = "phase.major.minor_patch";

var versionElement = document.createElement('p');
versionElement.id = 'version_text';
versionElement.innerHTML = version_placeholder+'<br>';

document.body.prepend(versionElement);