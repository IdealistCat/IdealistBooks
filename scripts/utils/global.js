export const VERSION = returnVersion(true);

function returnVersion(dev = false) {
    var curVer = 'IdealistBooks ';
    
    // add version
    curVer += '0.0.1';

    // its alpha
    curVer += 'a';

    // its beta
    // curVer += 'b';

    // its a pre-release?
    // curVer += '_PR';

    // add other stuff
    // curVer += '_01p' // p is for patch

    // development version
    if (dev) curVer += ' Indev';

    return curVer;
}