import {RekognitionClient} from '@aws-sdk/client-rekognition'

const rekognitionClient =  new RekognitionClient({
    region: 'ap-southeast-1',
    credentials: {
        accessKeyId: 'AKIA4KZIVPSZA7YWUSVT',
        secretAccessKey: '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',
    }
})
export default rekognitionClient