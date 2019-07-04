import React from 'react';
import styles from './Features.module.css';
import flower from '../../Assets/Images/bouquet-of-roses.svg';
import gift from '../../Assets/Images/gift-box.svg';
import bow from '../../Assets/Images/wedding-bow.svg';

const features = () => (
    <div className={styles.Features}>
        <div className={styles.Feature}>
            <div>
                <object type="image/svg+xml" data={flower} />
            </div>
            <p>Drodzy goście, będzie nam bardzo miło, jeżeli zamiast kwiatami obdarujecie nas zdrapką Lotto (może los się do nas uśmiechnie!)</p>
        </div>
        <div className={styles.Feature}>
            <div>
                <object type="image/svg+xml" data={gift} />
            </div>
            <p>Jeśli zaś macie życzenie nas obdarować prezentem prosimy w ich miejsce o gotówkę, która pomoże zrealizować nam nasze marzenia.</p>
        </div>
        <div className={styles.Feature}>
            <div>
                <object type="image/svg+xml" data={bow} />
            </div>
            <p>A gdybyście zastanawiali się, jaki na naszej zabawie obowiązuje dress code, wybierzcie stroje, w któryc będziecie czuli się swobodnie i najlepiej skorzystacie z zabawy.</p>
        </div>
    </div>
);

export default features;