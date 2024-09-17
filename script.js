$nav = $("nav"); $section = $("section"); 
$aside = $("aside");
$kayah = $("#kayah");
$kayin = $("#kayin");
$mandalay = $("#mandalay");
$bago = $("#bago");
$yangon = $("#yangon");
$mon = $("#mon");
$rakhine = $("#rakhine");
$chin = $("#chin");
$ayeyarwady = $("#ayeyarwady");
$magway = $("#magway");
$shan = $("#shan");
$tanintharyi = $("#tanintharyi");
$kachin = $("#kachin");
$sagaing = $("#sagaing");
var clickCtrl = [];

const statesObj = {
    kaya: {
        contactArr: '_kayahState'
    },
    kayin: {
        contactArr: '_kayinState'
    }, 
    mandalay: {
        contactArr: '_mandalayState'
    },
    bago: {
        contactArr: [
            ['Save The Trees', 'Organisation', 'ပဲခူးမြို့နယ်', 'တောင်ငူမြို့', '09 256 666 575', 'https://www.facebook.com/savethetreesrescue'],
            ['Angel', 'Organisation', 'ပဲခူးမြို့နယ်', 'တောင်ငူမြို့', '09 774 696 203', 'https://www.facebook.com/profile.php?id=100008111537411']
        ]
    },
    yangon: {
        contactArr: '_yangonState'
    },
    mon: {
        contactArr: '_monState'
    },
    rakhine: {
        contactArr: '_rakhineState'
    },
    chin: {
        contactArr: '_chinState'
    },
    ayeyarwady: {
        contactArr: '_ayeyarwadyState'
    },
    magway: {
        contactArr: '_magwayState'
    },
    shan: {
        contactArr: '_shanState'
    },
    tanintharyi: {
        contactArr: '_tanintharyiState'
    },
    kachin: {
        contactArr: '_kachinState'
    },
    sagaing: {
        contactArr: '_sagaingState'
    }
};

(function () {
    $nav.hide();            //might show later
    $section.hide();        //hide the display area.

    $aside.on('click touchend', (e)=>{
        e.preventDefault();
        var clickedID = e.target.id;
     
        //handle clicking on outside the map
        if(clickedID){
            clickCtrl.push(clickedID);
            
            for(state in statesObj){
                if(clickedID === state){
                
                    if(clickCtrl[0]!==clickCtrl[1]) {
                        showContacts(statesObj[state].contactArr);
                    }

                    if(clickCtrl.length>1) {
                        clickCtrl.shift();
                    }                    
                }
            }
            
            $section.show();
        } else {
            alert('တိုင်း၊ ပြည်နယ် တစ်ခုခုကိုရွေးပါ');
        }
    })
})();

//name | type | tsp | city | contact | FB

function showContacts(contactArr){
    for(var i = 0; i < contactArr.length; i++){
        const orgDIV = document.querySelector('.org');
        // orgDIV.setAttribute('class', 'org');

        const orgRowDIV = document.createElement('div');
        orgRowDIV.setAttribute('class', 'org-row');
        
        const orgNameDIV = document.createElement('div');
        orgNameDIV.setAttribute('class', 'org-name');

        const orgLocationDIV = document.createElement('div');
        orgLocationDIV.setAttribute('class', 'org-location');

        const orgContactInfoDIV = document.createElement('div');
        orgContactInfoDIV.setAttribute('class', 'org-contact-info');

        const contactInfoAnchor = document.createElement('a');
        contactInfoAnchor.setAttribute('href', 'tel:' + contactArr[i][4]);
        contactInfoAnchor.textContent = contactArr[i][4];

        orgNameDIV.textContent = contactArr[i][0];
        orgLocationDIV.textContent = contactArr[i][3];

        orgContactInfoDIV.append(contactInfoAnchor);
        orgRowDIV.append(orgNameDIV);
        orgRowDIV.append(orgLocationDIV);
        orgRowDIV.append(orgContactInfoDIV);
        orgDIV.append(orgRowDIV);

        $section.append(orgDIV);
    }
}
