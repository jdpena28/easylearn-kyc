import {RekognitionClient} from '@aws-sdk/client-rekognition'

const rekognitionClient =  new RekognitionClient({
    region: 'ap-southeast-1',
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
    }
})
export default rekognitionClient