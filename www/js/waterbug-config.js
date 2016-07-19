// widths and padding
var canvasWidth = 1000; // this will be the exported width of the image
var elementPadding = 40; // padding around the logo and credit text

// logo configuration
// the name of the logo object should match the value of the corresponding radio button in the HTML.
var logos = {
    'lunchbox': {
        whitePath: '../img/unfpa-color.png', // path to white logo
        blackPath: '../img/unfpa-black.png', // path to black logo
        w: 173, // width of logo
        h: 82, // height of logo
        display: 'UNFPA color'
    },
    'socializr': {
        whitePath: '../img/unfpa-white.png',
        blackPath: '../img/unfpa-grey.png',
        w: 173,
        h: 82,
        display: 'UNFPA'
    }
};

// logo opacity for colors
var whiteLogoAlpha = '0.8';
var blackLogoAlpha = '0.6';

// type
var fontWeight = 'normal'; // font weight for credit
var fontSize = '8pt'; // font size for credit
var fontFace = "unfpabold"; // font family for credit
var fontShadow = 'rgba(0,0,0,0.7)'; // font shadow for credit
var fontShadowOffsetX = 0; // font shadow offset x
var fontShadowOffsetY = 0; // font shadow offset y
var fontShadowBlur = 10; // font shadow blur

// copyright options
var orgName = 'UNFPA';
var freelanceString = 'for ' + orgName;

var copyrightOptions = {
    'internal': {
        showPhotographer: true, // show the photographer input box
        showSource: false, // show the source input box
        photographerRequired: false, // require a photographer
        sourceRequired: false, // require a source
        source: orgName, // How the source should appear on the image, e.g. 'NPR'
        display: orgName, // How the option will appear in the dropdown menu   
    },
    'freelance': {
        showPhotographer: true,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: freelanceString,
        display: 'Freelance' 
    },
    'no attribution': {
        showPhotographer: false,
        showSource: false,
        photographerRequired: false,
        sourceRequired: false,
        source: '',
        display: 'No attribution mark' 
    },
    'thirdParty': {
        showPhotographer: true,
        showSource: true,
        photographerRequired: false,
        sourceRequired: false,
        source: '',
        display: 'Courtesy of' 
    }
}

// app load defaults
var currentCrop = 'twitter'; // default crop size
var currentLogo = 'lunchbox'; // default logo slug
var currentLogoColor = 'white'; // default logo color
var currentTextColor = 'white'; // default text color
var defaultImage = '../img/test-youth.jpg'; // path to image to load as test image
var defaultLogo = logos[currentLogo]['whitePath'] // path to default logo