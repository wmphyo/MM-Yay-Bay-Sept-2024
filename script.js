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
$disclaimer = $('.disclaimer');
var clickCtrl = [];

const statesObj = {
    kaya: {
        contactArr: []
    },
    kayin: {
        contactArr: []
    }, 
    mandalay: {
        contactArr: []
    },
    bago: {
        contactArr: [
            ['Save The Trees', 'Organisation', 'ပဲခူးမြို့နယ်', 'တောင်ငူမြို့', '09 256 666 575', 'https://www.facebook.com/savethetreesrescue'],
            ['Angel', 'Organisation', 'ပဲခူးမြို့နယ်', 'တောင်ငူမြို့', '09 774 696 203', 'https://www.facebook.com/profile.php?id=100008111537411'],
            ['Taungoo Rescuse', 'Organisation', 'ပဲခူးမြို့နယ်', 'တောင်ငူမြို့', '09-882211749', 'https://www.facebook.com/profile.php?id=100088687106873'], //work for more contact infos
            ['မေတ္တာရှင်အသင်း', 'Organisation', 'ပဲခူးမြို့နယ်', 'တောင်ငူမြို့', '09428155773', 'https://www.facebook.com/profile.php?id=100087020120740']
        ]
    },
    yangon: {
        contactArr: []
    },
    mon: {
        contactArr: []
    },
    rakhine: {
        contactArr: []
    },
    chin: {
        contactArr: []
    },
    ayeyarwady: {
        contactArr: []
    },
    magway: {
        contactArr: []
    },
    shan: {
        contactArr: []
    },
    tanintharyi: {
        contactArr: []
    },
    kachin: {
        contactArr: []
    },
    sagaing: {
        contactArr: []
    }
};

(function () {
    $nav.hide();            //might show later
    $section.hide();        //hide the display area.

    $disclaimer.on('click touchend', (e)=>{
        e.preventDefault();
        $disclaimer.hide();
    })

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
        orgNameDIV.setAttribute('class', 'org-name row-data');

        const orgLocationDIV = document.createElement('div');
        orgLocationDIV.setAttribute('class', 'org-location row-data');

        const orgContactInfoDIV = document.createElement('div');
        orgContactInfoDIV.setAttribute('class', 'org-contact-info row-data');

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
