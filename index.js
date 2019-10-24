let AWS = require('aws-sdk');
let s3 = new AWS.S3({accessKeyId:'<ACCESS_KEY>', secretAccessKey:'<SECRET_KEY>', region:'ap-northeast-1'});

let params = {Bucket: 'mediate.app.jp', Key: 'json_files/meditation_sessions.json'};
s3.getSignedUrl('getObject', params, function (err, url) {
    console.log('Your generated pre-signed URL is', url);
});

// just use the generated URL to access the object
