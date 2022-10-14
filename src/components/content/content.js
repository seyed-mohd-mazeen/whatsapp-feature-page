/*
*
* content.js
* @author - Mazeen
* @date - 14 October, 2022
**/

import React from "react";
import './style.css';
import Img1 from '../../img/1.png';
import Img2 from '../../img/2.png';
import Img3 from '../../img/3.png';
import Img4 from '../../img/4.png';
import Img5 from '../../img/5.png';
import Img6 from '../../img/6.png';
import Img7 from '../../img/7.png';
import Img8 from '../../img/8.png';
import Img9 from '../../img/9.png';

const Content = () => {
    return (
            <div class="wrapper">
                <div class="row">
                    <div class="cell-1">
                        <div class="bgcol-lb t-center">
                            <h3>TEXTS</h3>
                            <h2>Simple, Reliable Messaging</h2>
                            <p>Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees</p>
                            <img class="img1" src={Img1} width="358"></img>
                            <p>* Data charges may apply. Contact your provider for details.</p>
                        </div>
                        <div class="bgcol-b t-center pb-0">
                            <h3>WHATSAPP VOICE AND VIDEO CALLS</h3>
                            <h2>Speak Freely</h2>
                            <p class="mb-0">With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations for when voice or text just isn't enough. WhatsApp voice and video calls use your phone's Internet connection, instead of your cell plan's voice minutes, so you don't have to worry about expensive calling charges.</p>
                            <p>* Data charges may apply. Contact your provider for details.</p>
                            <img src={Img2} width="424"></img>
                        </div>
                        <div class="bgcol-lb t-center pt-0">
                            <img src={Img7} width="358"></img>
                            <h3>PHOTOS AND VIDEOS</h3>
                            <h2>Share Moments that Matter</h2>
                            <p class="mb-0">Send photos and videos on WhatsApp instantly. You can even capture the moments that matter to you most with a built-in camera. With WhatsApp, photos and videos send quickly even if you're on a slow connection.</p>
                        </div>
                        <div class="bgcol-lb t-center pb-0">
                            <h3>DOCUMENTS</h3>
                            <h2>Document Sharing Made Easy</h2>
                            <p>Send PDFs, documents, spreadsheets, slideshows and more, without the hassle of email or file sharing apps. You can send documents up to 100 MB, so it's easy to get what you need over to who you want.</p>
                            <img src={Img9} width="358"></img>
                        </div>
                    </div>
                    <div class="cell-1">
                        <div class="bgcol-grey t-center">
                            <h3>GROUP CHAT</h3>
                            <h2>Groups to keep in touch</h2>
                            <p>Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos with up to 256 people at once. You can also name your group, mute or customize notifications, and more.</p>
                            <div class="img-container pos-rel">
                            <div class="row">
                                <div class="cell-1 t-center ptl">
                                <span><img class="img3" src={Img3} width="120"></img><h3 class="mtb">FAMILY</h3></span> 
                                </div>
                                <div class="cell-1 t-center">
                                <span><img class="img6" src={Img6} width="120"></img><h3 class="mtb">FRIENDS</h3></span>
                                <span><img class="img4" src={Img4} width="120"></img><h3 class="mtb">WEEKEND</h3></span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="bgcol-lgrey t-center pb-0">
                            <h3>WHATSAPP ON WEB AND DESKTOP</h3>
                            <h2>Keep the Conversation Going</h2>
                            <p>With WhatsApp on the web and desktop, you can seamlessly sync all of your chats to your computer so that you can chat on whatever device is most convenient for you. <a href="#">Download the desktop app</a> or visit <a href="#">web.whatsapp.com</a> to get started</p>
                            <img class="img5" src={Img5} width="358"></img>
                        </div>
                        <div class="bgcol-grey t-center">
                            <div class="img-ani"></div>
                            <h3>END-TO-END ENCRYPTION</h3>
                            <h2>Security by Default</h2>
                            <p>Some of your most personal moments are shared on WhatsApp, which is why we built end-to-end encryption into the latest versions of our app. When end-to-end encrypted, your messages and calls are secured so only you and the person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.</p>
                        </div>
                        <div class="bgcol-b t-center pt-0">
                            <img src={Img8} width="358"></img>
                            <h3 class="mtb">VOICE MESSAGES</h3>
                            <h2>Say What's On Your Mind</h2>
                            <p class="mb-0">Sometimes, your voice says it all. With just one tap you can record a Voice Message, perfect for a quick hello or a longer story.</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Content;