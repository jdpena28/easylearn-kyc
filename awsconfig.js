import {RekognitionClient} from '@aws-sdk/client-rekognition'

const rekognitionClient =  new RekognitionClient({
    region: 'ap-southeast-1',
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    }
})
export default rekognitionClient