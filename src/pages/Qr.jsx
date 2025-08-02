
import styles from '../components/QrStyles.module.css'

export function Qr() {
  return (
    <div className={styles.qrContainer}>
      <div className={styles.card}>
        <img src='https://res.cloudinary.com/dcut7k58h/image/upload/v1754167975/qract_l5f7wa.png' alt="QR Act" className={styles.qrimg}/>
        <h3>imrprove your front-end skills by building prjects</h3>
        <h4>scan QR code to visit front-end mentor and get your coding skills to the next level</h4>
      </div>
    </div>
  )
}

