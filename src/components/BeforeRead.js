import React from 'react';

const Readme = () => {
    return (
        <div class="header">
            <p>兵庫県内における訪問看護ステーション検索サイトです。2024/06/02 兵庫県全域対応</p>
            <p>看護ステーション並びにステーションごとの特徴は<a href="https://www.h-houkan.jp/">一般社団法人兵庫県訪問看護ステーション連絡協議会</a>の掲載情報を使用</p>
            <p>郵便番号の位置情報データについてはHeartRails Geo APIを利用して取得した。下はクレジット</p>
            <blockquote class="cite">
                出典:<a href="https://nlftp.mlit.go.jp/">「位置参照情報」(国土交通省)</a>の加工情報・<a href="https://geoapi.heartrails.com/">「HeartRails Geo API」(HeartRails Inc.)</a>
            </blockquote>
            <p>本サイトは住所情報における看護ステーション検索の補助を目的としており、その情報の正確性については保証しかねます。</p>
            <p>看護ステーションへの連絡の際は兵庫県訪問看護ステーション連絡協議会のホームページ、またはその施設のホームページから連絡してください。</p>

            <h2>使い方</h2>
            <p>住所を入力して検索ボタンを押すと、その住所から近い看護ステーションが表示されます。</p>
            <p>検索結果に絞り込みをかける場合は、条件を選択してください。</p>
            <p>'-'は明記なし、'o'は対応、'x'は非対応、'特'は特化、'要'は要相談</p>
        </div>
    );
};

export default Readme;