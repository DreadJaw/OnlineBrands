const brandList = {
    facebook: {
        name: 'Facebook',
        description: 'Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
        color: '#3b5998',
        icon: 'facebook-f',
        link: 'https://www.facebook.com'
    },
    twitter: {
        name: 'Twitter',
        description: 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.',
        color: '#00aced',
        icon: 'twitter',
        link: 'https://twitter.com'
    },
    github: {
        name: 'Github',
        description: 'GitHub brings together the world\'s largest community of developers to discover, share, and build better software.',
        color: '#333333',
        icon: 'github',
        link: ''
    },
    apple: {
        name: 'Apple',
        description: 'Discover Apple and shop everything iPhone, iPad, Apple Watch, Mac and Apple TV. Explore accessories, entertainment and expert device support.',
        color: '#555555',
        icon: 'apple',
        link: 'https://www.apple.com'
    },
    discord: {
        name: 'Discord',
        description: 'Get the best, most secure voice and text chat for playing games with your friends. It\'s quick and easy to set up, and 100% free!',
        color: '#7289da',
        icon: 'discord',
        link: 'https://discordapp.com'
    },
    google: {
        name: 'Google',
        description: 'Search the world\'s information, including webpages, images, videos and more.',
        color: '#db4437',
        icon: 'google',
        link: 'https://google.com/'
    },
    adobe: {
        name: 'Adobe',
        description: 'When imagination & innovation come together, anything’s possible.',
        color: '#ff0000',
        icon: 'adobe',
        link: 'https://www.adobe.com'
    },
    amazon: {
        name: 'Amazon',
        description: 'Checkout Bestsellers from Top-rated Brands.',
        color: '#ff9900',
        icon: 'amazon',
        link: 'https://www.amazon.com'
    },
    deviantart: {
        name: 'DeviantArt',
        description: 'The world\'s largest online social community for artists and art enthusiasts, allowing people to connect through the creation and sharing of art.',
        color: '#00e59b',
        icon: 'deviantart',
        link: 'https://www.deviantart.com'
    },
    patreon: {
        name: 'Patreon',
        description: 'Patreon is a membership platform that makes it easy for artists and creators to get paid.',
        color: '#f96854',
        icon: 'patreon',
        link: 'https://www.patreon.com'
    },
    snapchat: {
        name: 'Snapchat',
        description: 'Snapchat lets you easily talk with friends, view Live Stories from around the world, and explore news in Discover.',
        color: '#fffc00',
        icon: 'snapchat-square',
        link: 'https://www.snapchat.com'
    },
    tumblr: {
        name: 'Tumblr',
        description: 'Tumblr is a place to express yourself, discover yourself, and bond over the stuff you love.',
        color: '#34526f',
        icon: 'tumblr',
        link: 'https://www.tumblr.com'
    },
    youtube: {
        name: 'YouTube',
        description: 'Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.',
        color: '#ff0000',
        icon: 'youtube',
        link: 'https://www.youtube.com'
    },
    wikipedia: {
        name: 'Wikipedia',
        description: 'Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.',
        color: '#000000',
        icon: 'wikipedia-w',
        link: 'https://www.wikipedia.org'
    },
    vine: {
        name: 'Vine',
        description: 'The entertainment network where videos and personalities get really big, really fast.',
        color: '#00cc99',
        icon: 'vine',
        link: 'https://vine.co'
    },
    etsy: {
        name: 'Etsy',
        description: 'If it’s handcrafted, vintage, custom or unique, it’s on Etsy.',
        color: '#d5641c',
        icon: 'etsy',
        link: 'https://www.etsy.com'
    },
    audible: {
        name: 'Audible',
        description: 'Listen to Best Sellers, Exclusive Originals, And More.',
        color: '#f7991c',
        icon: 'audible',
        link: 'https://www.audible.com'
    },
    paypal: {
        name: 'PayPal',
        description: 'PayPal is the faster, safer way to send money, make an online payment, receive money or set up a merchant account.',
        color: '#0079c1',
        icon: 'paypal',
        link: 'https://www.paypal.com'
    },
    fontawesome: {
        name: 'FontAwesome',
        description: 'Get vector icons and social logos on your website with Font Awesome, the web\'s most popular icon set and toolkit.',
        color: '#4dabf7',
        icon: 'font-awesome',
        link: 'https://fontawesome.com'
    },
    bootstrap: {
        name: 'Bootstrap',
        description: 'Build responsive, mobile-first projects on the web with the world’s most popular front-end component library.',
        color: '#7952b3',
        icon: 'bootstrap',
        link: 'https://getbootstrap.com'
    },
    instagram: {
        name: 'Instagram',
        description: 'A simple, fun & creative way to capture, edit & share photos, videos & messages with friends & family.',
        color: '#f77737',
        icon: 'instagram',
        link: 'https://www.instagram.com'
    },
    kickstarter: {
        name: 'Kickstarter',
        description: 'Kickstarter exists to help bring creative projects to life.',
        color: '#2bde73',
        icon: 'kickstarter-k',
        link: 'https://www.kickstarter.com'
    },
    opera: {
        name: 'Opera',
        description: 'Opera\'s free VPN, Ad Blocker, integrated messengers and private mode help you browse securely and smoothly.',
        color: '#cc0f16',
        icon: 'opera',
        link: 'https://www.opera.com'
    },
    firefox: {
        name: 'Firefox',
        description: 'Firefox is more than a browser.',
        color: '#ff9500',
        icon: 'firefox',
        link: 'https://www.mozilla.org/en-US/firefox/'
    },
    googlechrome: {
        name: 'Google Chrome',
        description: 'A more simple, secure, and faster web browser than ever, with Google\'s smarts built-in.',
        color: '#4285f4',
        icon: 'chrome',
        link: 'https://www.google.com/chrome/'
    },
    android: {
        name: 'Android',
        description: 'From phones and watches to cars and TVs, customise your digital life with Android.',
        color: '#a4c639',
        icon: 'android',
        link: 'https://www.android.com'
    },
    ebay: {
        name: 'eBay',
        description: 'eBay is where the world goes to shop, sell, and give.',
        color: '#e53238',
        icon: 'ebay',
        link: 'https://www.ebay.com'
    }
}