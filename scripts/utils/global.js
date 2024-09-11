export const VERSION = returnVersion(true);

function returnVersion(dev = false) {
    var curVer = 'IdealistBooks ';
    
    // add version
    curVer += '0.0.1';

    // its alpha
    curVer += addSumTxt('a', '', '', '');

    // its beta
    // curVer += addSumTxt('b', '', '', '');

    // its a pre-release?
    // curVer += addSumTxt('PR', '', '', '_');

    // add other stuff
    // curVer += addSumTxt('01p', '', '', '_'); // p is for patch

    // development version
    if (dev) {
        curVer += addSumTxt('Indev');
        
        // dev version subtitle
        curVer += addSumTxt('Basic B**** Site', '(', ')');
    }

    getDumbAssCommit();

    return curVer;
}

function addSumTxt(txt = 'hm', begin="", end="", add = ' ') {
    return `${add}${begin}${txt}${end}`;
}

export function getDumbAssCommit() {

    fetch('https://api.github.com/repos/IdealistBooks/IdealistBooks/commits?per_page=1')
  .then(res => res.json())
  .then(res => {
    document.getElementById('dumbcommit').innerHTML = res[0].commit.message.split('/n')[0];
  })
}