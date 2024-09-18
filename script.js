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
$orgDIV = $('.org');
$emptyContent = 'ဒီ ပြည်နယ်အတွက်ပြစရာအချက်အလက်မရှိသေးပါခင်ဗျာ';

var clickCtrl = [];

const statesObj = {
    kayah: {
        contactArr: []
    },
    kayin: {
        contactArr: [
            ['Myanmar Rescuse', 'Organisation', 'ကရင်ပြည်နယ်', 'ဘားအံမြို့', '09 694 455 441', ''],
            ['မာဃ လူမှုကူညီရေး', 'Organisation', 'ကရင်ပြည်နယ်', 'ဘားအံမြို့', '09 887 791 919', ''],
            ['ပေးဆပ်သူ ကူညီရေး', 'Organisation', 'ကရင်ပြည်နယ်', 'ဘားအံမြို့', '09 677 551 404', '']
        ]   
    }, 
    mandalay: {
        contactArr: [
            ['ဒါးရဲခေါင်းရွာ ကျောင်းထိုင် ဆရာတော်', 'Organisation', 'မန္တလေးတိုင်း', 'မြစ်သားမြို့', '09 784 497 277', ''],
            ['နန္ဒာမေတ္တာ ရှာဖွေကယ်ဆယ်ရေးအဖွဲ့', 'Organisation', 'မန္တလေးတိုင်း', 'မြစ်သားမြို့', '09 402 748 872'],
            ['ကျောက်ဆယ် ကယ်ဆယ်ရေး', 'Organisation', 'မန္တလေးတိုင်း', 'ကျောက်ဆည်မြို့', '09 258 444 414'],
            ['ပျော်ဘွယ် ကယ်ဆယ်ရေး', 'Organisation', 'မန္တလေးတိုင်း', 'ပျော်ဘွယ်မြို့', '09 449 988 191'],
            ['ဝမ်းတွင်း ပရဟိတကွန်ရက်', 'Organisation', 'မန္တလေးတိုင်း', 'ဝမ်းတွင်းမြို့', '09 444 484 129'],
            ['မျိုးဆက်သစ် မြတ်ပါရမီ', 'Organisation', 'မန္တလေးတိုင်း', 'မိတ္ထီလာမြို့', '09 402 684 996']
        ]
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
        contactArr: [
            ['မေတ္တာသီတာရေစင်', 'Organisation', 'ရန်ကုန်တိုင်း', 'ရန်ကုန်မြို့', '09 428 139 424', 'https://www.facebook.com/profile.php?id=100066563317926']
        ]
    },
    mon: {
        contactArr: [
            ['ရွှေလင်းယုန် လူမှုကယ်ဆယ်ရေး', 'Organisation', 'မွန်ပြည်နယ်', 'သထုံမြို့', '09 681 458 909', 'https://www.facebook.com/100092238326213/posts/440872268997380/?mibextid=QwDbR1'],
            ['ကျိုက်ထို လူငယ်အသင်း', 'Organisation', 'မွန်ပြည်နယ်', 'ကျိုက်ထိုမြို့', '09 941 337 925 ', '']
        ]
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
        contactArr: [
            ['ကလောဂရုဏာ လူမှုကူညီရေးအသင်း', 'Organisation', 'ရှမ်းပြည်နယ်', 'ကလောမြို့', '09 777 361 361', ''],
            ['ကလောမြို့ မီးသတ်တပ်ဖွဲ့', 'Organisation', 'ရှမ်းပြည်နယ်', 'ကလောမြို့', '08 150 760', ''],
            ['မင်းကျောင်း စာသင်တိုက်', 'Organisation', 'ရှမ်းပြည်နယ်', 'ကလောမြို့', '09 448 551 231', ''],
            ['အာရုံဦး ကူညီရေး', 'Organisation', 'ရှမ်းပြည်နယ်', 'ကလောမြို့', '09 262 290 279', '']
        ] //name | type | tsp | city | contact | FB
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
                        //clear the html so that new info can show
                        $orgDIV.html('');

                        //If contact array got data
                        if(statesObj[state].contactArr.length !== 0){
                            tableHead();
                            showContacts(statesObj[state].contactArr);
                        } else {
                            $orgDIV.html($emptyContent);
                        }           
                        $section.show();
                    }

                    if(clickCtrl.length>1) {
                        clickCtrl.shift();
                    }                    
                }
            }
        } else {
            alert('တိုင်း၊ ပြည်နယ် တစ်ခုခုကိုရွေးပါ');
        }
    })
})();

//name | type | tsp | city | contact | FB

function showContacts(contactArr){
    for(var i = 0; i < contactArr.length; i++){
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

        $orgDIV.append(orgRowDIV);

        $section.append($orgDIV);
    }
}

function tableHead(){
    const orgRowDIV = document.createElement('div');
    const orgNameDIV = document.createElement('div');
    const orgLocationDIV = document.createElement('div');
    const orgContactInfoDIV = document.createElement('div');
    
    orgRowDIV.setAttribute('class', 'org-row');
    orgNameDIV.setAttribute('class', 'org-name row-head');
    orgLocationDIV.setAttribute('class', 'org-location row-head');
    orgContactInfoDIV.setAttribute('class', 'org-contact-info row-head');

    orgNameDIV.textContent = 'အဖွဲအစည်းအမည်';
    orgLocationDIV.textContent = 'မြို့အမည်';
    orgContactInfoDIV.textContent = 'ဆက်သွယ်ရန်';

    orgRowDIV.append(orgNameDIV);
    orgRowDIV.append(orgLocationDIV);
    orgRowDIV.append(orgContactInfoDIV);
    $orgDIV.append(orgRowDIV);

}