import React from 'react';

import './SOSTemplate.css'
export default function SOSTemplate(props) {
    return(
        <section className='sos-template' style={{backgroundColor: `${props.bgColor}`}}>
            <div className='wrapper flex-row'>
                <div className='flex-column'>
                    <img className='sos-img' src={process.env.PUBLIC_URL + `/images/sos/${props.topic}.png`}/>
                    <div className='sos-note'>
                        {props.topic==="pill" &&
                            <p>
                                ・避妊に失敗したかもしれない、コンドームが破れてしまった<br/>
                                ・避妊をしないでセックスをしてしまった<br/>
                                ・緊急避妊薬（アフターピル）を処方してくれる病院を知りたいなど<br/><br/>
                                <span className='keyword'>※家族や周囲に相談しにくいことも、電話で相談出来ますよ。1人で悩まず、勇気を出して相談してみませんか。</span>
                            </p>
                        }
                        {props.topic==="pregnant" &&
                            <p>
                                ・生理がこない、お腹が大きくなってきた、妊娠初期症状（吐き気、倦怠感）がある<br/>
                                ・思いがけず妊娠したかも、してしまった<br/>
                                ・妊娠し産みたいけれど、育てられない、育てる自信がない<br/>
                                ・妊娠したが、両親や先生に相談出来ない　など<br/><br/>
                                <span className='keyword'>※家族や周囲に相談しにくいことも、電話で相談出来ますよ。1人で悩まず、勇気を出して相談してみませんか。</span>
                            </p>
                        }
                        {props.topic==="violence" &&
                            <p>
                                ・子どもが性犯罪に巻き込まれた<br/>
                                ・他人（友人や知人含む）や家族に身体を触られたり、触らせられたりしたが、誰にも相談できない<br/>
                                ・交際相手からデートDV、配偶者からDVを受けている<br/>
                                <span className='keyword'>
                                    ※性行為の強要、行動の監視、スマホの着歴チェック、傷つける発言、必ず奢らせるなどもすべてデートDVに当てはまります。<br/>
                                    ※家族や周囲に相談しにくいことも、電話で相談出来ますよ。1人で悩まず、勇気を出して相談してみませんか。
                                </span>
                            </p>
                        }
                        {props.topic==="sns" &&
                            <p>
                                ・SNS（LINE、Twitterなど）やメールで裸の写真を送ってしまった（「自画撮り」）<br/>
                                ・インターネット上に自分のプライベートな画像や動画が流出している（リベンジポルノ）<br/>
                                ・アダルトサイトの架空請求（かくうせいきゅう）の被害にあった<br/><br/>
                                <span className='keyword'>※家族や周囲に相談しにくいことも、電話で相談出来ますよ。1人で悩まず、勇気を出して相談してみませんか。</span>
                            </p>
                        }
                        {props.topic==="illness" &&
                            <p>
                                ・（男子）精巣の位置に違和感、異常を感じるなど<br/>
                                ・（男子）正確な部位が分からないが、おちんちんが痛いと言っている<br/>
                                ・（女子）胸にシコリや違和感がある<br/>
                                ・（女子）子宮や下腹部痛みや違和感がある　など<br/>
                                <span className='keyword'>
                                    ※処置が必要な病気の可能性があります。「いつもと違う」「おかしい」と思うことがあれば、まずはお近くの病院やかかりつけ医へ受診しましょう。<br/>
                                    ※夜間・休日の場合や、救急診療が必要かどうかわからないときは、以下のような相談窓口もあります。
                                </span>
                            </p>
                        }
                        {props.topic==="lgbt" &&
                            <p>
                                ・子どもから同性愛や性別への違和感を打ち明けられたが、どう対応してよいのかわからない<br/>
                                ・自分の性別に違和感があるが、相談できる相手がいない<br/>
                                ・好きになる相手が同性で悩んでいる　など<br/><br/>
                                <span className='keyword'>※家族や周囲に相談しにくいことも、電話で相談出来ますよ。1人で悩まず、勇気を出して相談してみませんか。</span>
                            </p>
                        }
                        {props.topic==="adolescent" &&
                            <p>
                                ・中学生、高校生の子どもの身体について相談したいことがある<br/>
                                ・人間関係がうまくいかない、周囲になじめず悩んでいる<br/>
                                ・子どもの非行にどう対応したらよいのかわからない　など<br/><br/>
                                <span className='keyword'>※家族や周囲に相談しにくいことも、電話で相談出来ますよ。1人で悩まず、勇気を出して相談してみませんか。</span>
                            </p>
                        }
                        {props.topic==="kodomo" &&
                            <p>
                                <span className='keyword'>※家族や周囲に相談しにくいことも、電話で相談出来ますよ。1人で悩まず、勇気を出して相談してみませんか。</span><br/>
                                （かぞく・せんせい・ともだちにそうだんしにくいことも、でんわでそうだんできますよ。ひとりでなやまず、ゆうきをだしてそうだんしてみませんか。）
                            </p>
                        }
                    </div>
                </div>
                <div className='sos-content'>
                    <div className='scroll-wrapper'>
                        {props.topic==="pill" && 
                            <p>
                               <span className='keyword'>▼ Dr.北村が推奨する 緊急避妊薬（アフターピル）・低用量ピル 処方施設検索システム </span> <br/>
                                緊急避妊薬（アフターピル）・低用量（ていようりょう）ピルを処方してくれる病院・クリニックを、
                                現在地や駅名などから検索ができます。受診の前に確認すべきことも記載されていて、事前知識をつけることができます。<br/>
                                　※緊急避妊薬の処方は、72時間を過ぎないよう、注意してください。<br/>
                                <span className='bold'>HP：「緊急避妊薬・低用量ピル 処方施設検索システム」</span><br/>
                                <span className='bold'>HP：「緊急避妊Q&A」ページ</span><br/>
                                <br/>
                                <span className='keyword'>▼ 日曜・祝日の緊急避妊薬対応施設リスト　ピルにゃん</span><br/>
                                ピルに関するあらゆる情報を発信するサイト。日曜・祝日対応で緊急避妊薬（アフターピル）を処方してくれる病院・クリニックを紹介しています。<br/>
                                　※緊急避妊薬の処方は、72時間を過ぎないよう、注意してください。<br/>
                                <span className='bold'>HP：「ピルにゃん（β版）」</span><br/>
                                <br/>
                                <span className='keyword'>▼ 緊急避妊に係る取り組みについて「施設紹介」（厚生労働省）</span> <br/>
                                厚生労働省のWebサイトに掲載を希望した緊急避妊にかかる対面診療が可能な産婦人科医療機関等が紹介されています。都道府県ごとに確認ができ、医療機関名、連絡先、URL、営業時間などが一覧で確認できます。<br/>
                                　※緊急避妊薬の処方は、72時間を過ぎないよう、注意してください。<br/>
                                <span className='bold'>HP： 緊急避妊に係る取り組みについて「施設紹介」</span>
                            </p>
                        }
                        {props.topic==="pregnant" && 
                            <p>
                               <span className='keyword'>▼ 全国のにんしんSOS相談窓口（一般社団法人全国妊娠SOSネットワーク） </span> <br/>
                                全国の思いがけない妊娠をした場合の相談窓口を調べられるサイト。自治体・民間による妊娠SOS相談や、養子縁組機関を調べることができます。<br/>
                                <span className='bold'>HP：「全国のにんしんSOS相談窓口」</span><br/>
                                　※相談は無料、秘密は守られます。<br/>
                                　※ご相談は、全国妊娠SOSネットワークではなく、直接全国の相談窓口にご連絡ください。<br/><br/>
                                
                                <span className='keyword'>▼ ピルコンにんしんカモ相談（NPO法人ピルコン） </span><br/>
                                妊娠の不安を抱える全ての人に、避妊や検査、支援先などの正しい情報を即座に自動応答で答えるチャットボット。LINEで友達になるだけで、どなたでも無料で利用ができます。<br/>
                                <span className='bold'>HP：「ピルコンにんしんカモ相談」</span>
                            </p>
                        }
                        {props.topic==="violence" && 
                            <p>
                               <span className='keyword'>▼ DV相談プラス（内閣府） </span><br/>
                               配偶者やパートナーから受けているさまざまな暴力の悩みに専門の相談員が対応。電話だけでなく、メールやチャットにより24時間受付（メール／4.29- 電話）してくれます。10か国語に対応（5/1-)。<br/>
                                TEL：0120-279-889<br/>
                                受付：9:00-21:00（4/29- 24時間受付）<br/>
                                メール：https://form.soudanplus.jp/mail<br/>
                                受付：24時間<br/>
                                チャット：詳しくはサイト内「チャット」相談<br/>
                                受付：12:00-22:00<br/>
                                　※相談は無料、秘密は守られます。<br/>
                                <span className='bold'>HP：「DV相談プラス」（内閣府）</span><br/><br/>

                               <span className='keyword'>▼ 性犯罪被害相談電話「#8103（ハートさん）」（警察庁）</span><br/>
                               お近くの性犯罪被害相談電話窓口につながります。場合によっては、病院・医療機関の紹介や、医療費の公費負担などの制度利用の案内を受けることができます。病院へ行くお金の心配がある方も、まずはご相談してみてください。<br/>
                               TEL：＃8103<br/>
                               <span className='bold'>HP：「性犯罪被害相談電話」（警察庁Webサイト）</span><br/>
                                受付：土日・祝日及び時間外は、当直で対応<br/>
                                　※相談は無料、秘密は守られます。<br/><br/>

                               <span className='keyword'>▼ 性犯罪、性暴力被害者のためのワンストップ支援センター「#8891」（男女共同参画局） </span> <br/>
                               全国のワンストップ支援センターの中から、発信場所から最寄りの支援センターへつながる短縮番号「#8891（はやくワンストップ）」が2020年10月1日からはじまりました。<br/>
                               HPでは、全国の性犯罪・性暴力に関する相談窓口が紹介されています。産婦人科やカウンセリング、法律相談などの専門機関とも連携。<br/>
                               TEL：＃8891<br/>
                               <span className='bold'>HP：「性犯罪・性暴力被害者のためのワンストップ支援センター一覧」</span><br/>
                                　※相談は無料、秘密は守られます。<br/><br/>
                                
                               <span className='keyword'>▼ ぴったり相談窓口（警察庁） </span><br/>
                               「きくまる」という犬のキャラクターがチャットボットで対応。回答に応じて適切な相談窓口を案内してくれます。質問に対して回答するだけで良いので、子どもでも悩みに合った相談窓口までたどり着くことができます。<br/>
                               <span className='bold'>HP：「ぴったり相談窓口」（警察庁）</span>
                            </p>
                        }
                        {props.topic==="sns" &&    
                            <p>
                               <span className='keyword'>▼ リベンジポルノの被害にあわれたら／セーフライン（一般社団法人セーファーインターネット協会） </span><br/>
                               自分の意志に反して、自分のプライベートな画像や動画がインターネット上に掲載されてしまうリベンジポルノに対して、あなたに代わって、無料で国内外のプロバイダに削除申請をしてくれます。<br/>
                               原則としてご本人またはその保護者の方（ご本人が児童の場合）からの通報に対応。<br/>
                               <span className='bold'>HP：「リベンジポルノの被害にあわれたら／セーフライン」</span><br/>
                               　※相談は無料、秘密は守られます。<br/><br/>

                               <span className='keyword'>▼ 女性の人権ホットライン（法務局）</span><br/>
                               パートナーからの暴力、セクシュアル・ハラスメント、ストーカー行為など女性を困らせる人権問題についての相談を受け付けるホットライン。電話は、女性の人権問題に詳しい法務局（ほうむきょく）スタッフまたは人権擁護委員（じんけんようごいいん）が対応してくれます。<br/>
                               性的な画像を含むインターネット上の人権侵害（じんけんしんがい）についても、削除依頼方法などのアドバイスを行ってくれます。<br/>
                               TEL：0570-070-810（ゼロナナゼロのハートライン）<br/>
                               受付：月～金:8:30-17:15<br/>
                               <span className='bold'>HP：「女性の人権ホットライン」</span><br/>
                               　※相談は無料、秘密は守られます。<br/><br/>

                               <span className='keyword'>▼ 都道府県警察本部のサイバー犯罪相談窓口（警視庁）</span><br/>
                               身に覚えのない請求メールが届いたとき、ワンクリック詐欺サイト（急にスマホに料金請求の画面が表示されるサイト）にアクセスしてしまったときの対処法についてアドバイスを行ってくれます。<br/>
                               TEL：03-5805-1731<br/>
                               受付：月～金:8:30-17:15<br/>
                               <span className='bold'>HP：「都道府県警察本部のサイバー犯罪相談窓口」（警視庁）</span><br/>
                               　※相談は無料、秘密は守られます。
                            </p>
                        }
                        {props.topic==="illness" &&
                            <p>
                               <span className='keyword'>▼ こども医療電話相談（厚生労働省）</span><br/>
                               夜間や休日の子どもの急な異常や症状に、『今すぐ病院に行ったほうがいいのかな？』と迷ったときの、相談窓口です。#8000をプッシュすることで、お住いの都道府県の窓口に自動転送され、小児科医師・看護師から、症状に応じた適切な対処の仕方や受診する病院などのアドバイスをうけられます。<br/>
                               TEL：＃8000<br/>
                               受付：地域により異なる（詳細は下記ページ参照）<br/>
                               <span className='bold'>HP：「こども医療電話相談」（厚生労働省）</span><br/>
                               　※相談は無料、秘密は守られます。<br/><br/>

                               <span className='keyword'>▼ 東京消防庁救急相談センター（東京消防庁）</span><br/>
                               『今すぐ病院に行ったほうがいいのかな？』と迷った際の相談窓口。相談医療チーム（医師、看護師、救急隊経験者等の職員）が24時間年中無休で対応してくれます。<br/>
                               ※東京都以外の救急医療機関の情報は、救急相談センターでは扱っていないため、各地の医療機関案内を担当する機関にお問い合わせください。<br/>
                               TEL：＃7119<br/>
                               受付：24時間年中無休<br/>
                               （＃7119がつながらない場合は、２３区：０３－３２１２－２３２３、多摩地区：０４２－５２１－２３２３　<br/>※通常の通話料がかかります。）
                               <span className='bold'>HP：「東京消防庁救急相談センター（東京消防庁）」</span><br/>
                               　※相談は無料、秘密は守られます。<br/><br/>

                               <span className='keyword'>▼ ラッコの妊娠相談室 </span><br/>
                               産婦人科医師が作った、妊娠・避妊・不妊・性感染症など、産婦人科に関する「どこに相談していいか分からない」に関して、自動で回答してくれるLINEボット相談です。相談に合った相談窓口も紹介してくれます。<br/>
                               <span className='bold'>HP：「ラッコの妊娠相談室」</span>
                            </p>
                        }
                        {props.topic==="lgbt" &&
                            <p>
                               <span className='keyword'>▼ よりそいホットライン（一般社団法人社会的包摂サポートセンター）</span><br/>
                               自殺予防やDV、性暴力他、どんな人のどんな悩みにも寄り添う相談窓口。セクシュアルマイノリティの専門回線があり、性別や同性愛に関わる悩みについて、専門の相談員が一緒に解決する方法を探してくれます。本人、家族や友人、周囲の方々の相談にも応じてくれます。<br/>
                               TEL：0120-279-338<br/>
                                　※音声ガイダンスが流れるので、専門回線「4」番をプッシュしてください。セクシュアルマイノリティの専門回線につながります。<br/>
                                受付：24時間年中無休<br/>
                                TEL：0120-279-226　＜東日本大震災の被災3県(岩手県、宮城県、福島県)専用のダイヤル＞<br/>
                                　※音声ガイダンスが流れるので、専門回線「4」番をプッシュしてください。セクシュアルマイノリティの専門回線につながります。<br/>
                                受付：24時間年中無休<br/>
                                <span className='bold'>HP：「よりそいホットライン」（一般社団法人社会的包摂サポートセンター）</span><br/>
                               　※相談は無料、秘密は守られます。<br/><br/>

                               <span className='keyword'>▼ アイリスにじいろ電話相談（渋谷男女平等・ダイバーシティセンター）</span><br/>
                               パートナーとの関係、家族や友人との関係、職場や学校のことなど、セクシャルマイノリティに関する問題全般についての相談窓口。本人、家族や友人、周囲の方々の相談にも応じてくれます。<br/>
                               TEL: 03-3464-3401<br/>
                               受付：第2・4土曜：13:00-16:00<br/>
                               <span className='bold'>HP：「アイリスにじいろ電話相談」（渋谷男女平等・ダイバーシティセンター）</span><br/>
                               　※相談は無料、秘密は守られます。
                            </p>
                        }
                        {props.topic==="adolescent" &&
                            <p>
                               <span className='keyword'>▼ 思春期・FP相談LINE（一般社団法人日本家族協会）</span><br/>
                               思春期の身体についての心配ごとにLINEで相談が可能。質問には専門の相談員が対応してくれます。<br/>
                               受付：月曜～金曜日：10:00-16:00<br/>
                               <span className='bold'>HP：「思春期・FP相談LINE」（一般社団法人日本家族協会）</span><br/>
                               　※相談は無料、秘密は守られます。<br/><br/>

                               <span className='keyword'>▼「若者ナビ」（東京都若者総合相談センター）</span><br/>
                               東京都内に在住・在学・在勤の若者やその家族等を対象とした無料相談窓口。電話やメール、LINE相談のほか面談での相談も可能です。若者のさまざまな悩み（コロナ禍での悩み、子どもの非行の悩み、その他気になること）に対して、東京都内にある専門の窓口や支援機関を紹介してくれたり、情報を提供してくれます。<br/>
                               対象：東京都内に在住、在学、在勤のおおむね18歳～39歳の若者とその家族。
                                TEL: 03-3267-0808（もやもや）<br/>
                                受付：月～土：11:00-20:00<br/>
                                メール: 3-7以内に返信<br/>
                                受付：24時間<br/>
                                LINE: ※詳細は下記HPにてご確認ください<br/>
                                受付：月～土：11:00-20:00<br/>
                                <span className='bold'>HP：「若者ナビ」（東京都若者総合相談センター）</span><br/>
                               　※相談は無料、秘密は守られます。
                            </p>
                        }
                        {props.topic==="kodomo" &&
                            <p>
                               <span className='keyword'>▼ 24時間子供SOSダイヤル（文部科学省）（24じかんこどもえすおーえすだいやる／もんぶかがくしょう）</span><br/>
                               子どもの悩みに関することなら何でも、24時間無料で電話相談ができます。（こどものなやみにかんすることならなんでも、24じかんむりょうででんわそうだんができます。）<br/>
                               <span className='bold'>TEL（でんわ）：</span>  0120－0－78310（なやみいおう）<br/>
                               <span className='bold'>受付（うけつけ）：</span>24時間（24じかん）<br/>
                                　※相談にお金はいりません。ひみつは守られます。（そうだんにおかねはいりません。ひみつはまもられます）<br/><br/>

                               <span className='keyword'>▼ 子どもの人権110番（法務省）（こどものじんけん１１０／ほうむしょう）</span><br/>
                               学校でいじめられている、大人から叩かれたり身体をむりやりさわられたりする、親や先生にいえなくて苦しいことがあれば、話を聞いてくれ、どうしたらいいかをいっしょに考えてくれます。（がっこうでいじめられている、おとなからたたかれたりからだをむりやりさわられたりする、おややせんせいにいえなくてくるしいことがあれば、はなしをきいてくれ、どうしたらいいかをいっしょにかんがえてくれます）<br/>
                               <span className='bold'>TEL（でんわ）：</span> 0120-007-110<br/>
                               <span className='bold'>受付（うけつけ）：</span>午前8時半～午後5時15分まで（月～土曜日）※祝日除く（8じはん～5じ15月ふんまで　げつ～きんようび　※しゅくじつのぞく）<br/>
                                　※相談にお金はいりません。ひみつは守られます。（そうだんにおかねはいりません。ひみつはまもられます）<br/><br/>

                               <span className='keyword'>▼ チャイルドライン®18さいまでの子どもがかけるでんわ（NPO法人チャイルドライン支援センター）（ちゃいるどらいん®18さいまでのこどもがかけるでんわ／えぬぴーおーほうじんちゃいるどらいんしえんせんたー）</span><br/>
                               18さいまでの子どものための相談先です。ちょっとしたことでも、ただ話をしたいだけでも大丈夫。あなたの気持ちを大切にしながら、どうしたらいいかをいっしょに考えてくれます。（18さいまでのこどものためのそうだんさきです。ちょっとしたことでも、ただはなしをしたいだけでもだいじょうぶ。あなたのきもちをたいせつにしながら、どうしたらいいかをいっしょにかんがえてくれます。）<br/>
                               <span className='bold'>TEL（でんわ）：</span>0120-99-7777<br/>
                               <span className='bold'>受付（うけつけ）：</span>午後4時～午後9時（毎日）※12/29～1/3はお休みです （ごご4じ～ごご9じ／まいにち　※12/29～1/3はおやすみです）<br/>
                                　※相談にお金はいりません。ひみつは守られます。（そうだんにおかねはいりません。ひみつはまもられます）<br/>
                                <span className='bold'>チャット（ちゃっと）：</span>https://childline.or.jp/chat<br/>
                                <span className='bold'>受付（うけつけ）：</span>リンクからチャットができるを日を確認してください。（りんくからちゃっとができるひをかくにんしてください）<br/>
                                <span className='bold'>HP：「チャイルドライン®18さいまでの子どもがかけるでんわ」（NPO法人チャイルドライン支援センター）</span><br/><br/>
                               
                               <span className='keyword'>▼ こたエール／ネット・ケータイのトラブル相談窓口（東京都都民安全推進本部）（こたえーる／とうきょうととみんあんぜんすいしんほんぶ）</span><br/>
                               インターネットやスマホにまつわるトラブルの相談窓口です。お金を払えといわれた、自分の写真を送ってしまったなど、「どうしたらいいか分からない」とき相談にのってくれます。（いんたーねっとやすまほにまつわるとらぶるのそうだんまどぐちです。おかねをはらえといわれた、じぶんのしゃしんをおくってしまったなど「どうしたらいいかわからない」ときそうだんにのってくれます。）<br/>
                               <span className='bold'>TEL（でんわ）：</span> 0120－1－78302<br/>
                               <span className='bold'>受付（うけつけ）：</span>15時～21時（月～土曜日）※祝日除く（15じ～21じ　げつ～どようび　※しゅくじつのぞく）<br/>
                               <span className='bold'>メール：</span>こちらから<br/>
                               <span className='bold'>受付（うけつけ）：</span>24時間（24じかん）<br/>
                               <span className='bold'>LINE：</span>https://www.tokyohelpdesk.metro.tokyo.lg.jp/　<br/>
                                ※「LINEで相談する」よりご確認ください<br/>
                                <span className='bold'>受付（うけつけ）：</span>15時～21時（月～土曜日）※受付は20時30分まで。祝日除く（15じ～21じ　げつ～どようび　※うけつけは20じ30ふんまで。しゅくじつのぞく）<br/>
                                ※相談にお金はいりません。ひみつは守られます。（そうだんにおかねはいりません。ひみつはまもられます）<br/>
                                <span className='bold'>HP：「こたえーる（ネット・ケータイのトラブルそうだんまどぐち）」</span>
                                
                            </p>
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}