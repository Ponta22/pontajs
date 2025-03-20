import { useState } from 'react';
import Checkbox from './Checkbox';
import { useRouter } from 'next/router';

export default function Verify() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleVerify = () => {
    router.push('/main');
  };

  return (
    <div className="verify-container">
      <h1 className="no-select">Verifikasi Dulu, Senpai!</h1>
      <p className="no-select">Klik buat buktiin kamu bukan robot!</p>
      <Checkbox
        id="notRobot"
        label="I'm not a robot"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <button id="verifyBtn" disabled={!isChecked} onClick={handleVerify}>
        Masuk!
      </button>
      <div id="verifyStatus" className="no-select">
        {isChecked ? 'Siap masuk, Senpai!' : ''}
      </div>
    </div>
  );
}

