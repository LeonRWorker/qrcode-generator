import { Container, Card, QRCodeContent, Improve, Scan, QRCodeImage, OR, Generate } from "./styles"
import qrcodeimage from "../../assets/mentor.png"
import { useState } from "react"
import QRCode from 'qrcode'

export const Generator = () => {
  const [qrcodes, setQRCodes] = useState(qrcodeimage)
  const handleQRCode = (text: string) => {
    if(text.length >= 1) {
      QRCode.toDataURL(text, (error: any, url: string) => {
        setQRCodes(url)
      })
    } else {
      console.log(text.length)
      setQRCodes(qrcodeimage)
    }
  }
  return (
    <Container>
      <Card>
        <QRCodeContent>
          <QRCodeImage src={qrcodes} />
        </QRCodeContent>
        <Improve>
          Improve your front-end skills by buildind projects
        </Improve>
        <Scan>
          Scan the QR code to vist Frontend Mentor and take your coding skills to the next level
        </Scan>
        <OR>Or generate a new QR Code</OR>
        <Generate type={'text'} placeholder={'Fill in this field'} onChange={(event) => { handleQRCode(event?.target.value) }} />
      </Card>
    </Container>
  )
}