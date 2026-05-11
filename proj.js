// login authentication
const btn = document.getElementById('btn');

if (btn) {
    function password() {
        let pass = document.getElementById('password').value;
        let user = document.getElementById('username').value;

        if (user === 'skibiditoilet69' && pass === 'password10987654321') {
            window.alert('access granted! welcome back, skibiditoilet69');
            window.location.href = "notebooks.html";
        } else {
            document.getElementById('display').innerHTML =
                'wrong username/password. ' + clickCount + ' attempts left.';
        }
    }

    // button click count
    let clickCount = 3;
    btn.addEventListener('click', () => {
        clickCount--;

        if (clickCount < 0) {
            btn.disabled = true;
            document.getElementById('display').innerHTML = 'no attempts left. button disabled.';
        }
    });
}

// instructions
function instructions() {
    const show = document.getElementById('show');
    if (show) {
        show.innerHTML = 'stay logged in on this device';
    }
}

// pfp upload
document.addEventListener('DOMContentLoaded', function() {
    const fileInput = document.getElementById('file-input');
    
    if (!fileInput) {
        console.log('File input not found - not on profile page');
        return;
    }
    
    const avatarImg = document.querySelector('.avatar');
    const noFileSpan = document.querySelector('.no-file');

    fileInput.addEventListener('change', function(e) {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            noFileSpan.textContent = file.name;

            const reader = new FileReader();
            reader.onload = function(event) {
                avatarImg.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

// references
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// https://dev.to/codeply/bootstrap-5-sidebar-examples-38pb
//