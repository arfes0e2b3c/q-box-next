import { exchangeStateToUrl } from '@/lib'
import AWS from 'aws-sdk'
import base64url from 'base64url'
import { NextRequest, NextResponse } from 'next/server'

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-1',
})

const s3 = new AWS.S3()

export async function POST(req: NextRequest): Promise<NextResponse<string>> {
  try {
    const props = await req.json()

    const baseUrl = exchangeStateToUrl(props.state)
    const imageUrl =
      baseUrl +
      '?w=1200&h=630&blend-mode=normal&blend-align=middle,center&blend=https%3A%2F%2Fassets.imgix.net%2F%7Etext%3Fw%3D1000%26txt-color%3D333%26txt-align%3Dcenter%26txt-size%3D44%26txtfont%3DZenMaruGothic-Regular%26txt64%3D' +
      base64url(props.question)

    const imageRes = await fetch(imageUrl)
    const arrayBuffer = await imageRes.arrayBuffer()
    const imageData = Buffer.from(arrayBuffer)

    const params = {
      Bucket: process.env.S3_BUCKET_NAME || '',
      Key: props.contentId,
      Body: imageData,
      ContentType: 'image/png',
    }

    const s3Res = s3.upload(params, function (err: Error, data: AWS.S3.ManagedUpload.SendData) {
      if (err) {
        throw Error(err.message)
      }
      console.log(`File uploaded successfully. ${data.Location}`)
    })
    return NextResponse.json((await s3Res.promise()).Location, { status: 200 })
  } catch (e) {
    console.error(e)
    return NextResponse.json(e as string, { status: 500 })
  }
}
