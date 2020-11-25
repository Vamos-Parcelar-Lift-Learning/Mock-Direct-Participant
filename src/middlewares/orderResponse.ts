// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// encoder
import { Encoder, QRByte, QRKanji, ErrorCorrectionLevel } from '@nuintun/qrcode';
// decoder
import { Decoder } from '@nuintun/qrcode';
const orderResponse = (req, res, next) => {
    console.log(`Nova requisição recebida: ${req.method}`);

    const qrcode = new Encoder();

    qrcode.write('PIXVP');
    qrcode.make();
    console.log('qrcodeBruto', qrcode)

    const responseFinal = {
        order_id: 5,
        qrcode: qrcode.toDataURL(5, 5),
        qr_code_text: "texto_qr_code",
        status: "pending"
    }
    res.json(responseFinal)

};

export default orderResponse;
