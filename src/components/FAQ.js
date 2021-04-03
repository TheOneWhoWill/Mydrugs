import React from 'react';

function Faq() {
  return (
    <div className="FAQ">
      <h1>Frequently Asked Questions</h1>
      <div className="faqContainer">
        <div className="faqQuestionContainer">
          <h2 className="faq-question">Is my purshase completely secure through your shop when I make a Purchase?</h2>
          <p className="faq-answer">Yes. Just add the desired quantity to the cart and enter your address at the checkout. Your personal data is automatically encrypted using PGP and deleted after the order is dispatched. Our team of professionals then packs the goods in clean-room conditions, and ensures smooth and secure processing.</p>
        </div>
        <div className="faqQuestionContainer">
          <h2 className="faq-question">Can I really only pay with cryptocurrency?</h2>
          <p className="faq-answer">Yes. We only accept payments in Bitcoin, Ripple, IOTA, and Ethereum. The payment procedure is not complicated. You just need to set up a suitable wallet. We do not offer Payback or other bonus systems. We weren't born yesterday.</p>
        </div>
        <div className="faqQuestionContainer">
          <h2 className="faq-question">How can I receive my order anonymously?</h2>
          <p>Our shipping department operates around the clock to ensure fast and risk-free shipping. The delivery ussually arrives within a few days. Your order can be sent to any valid postal address, PO box, or package station. Thanks to our highly complex and decentralized system, the transfer to the logistics service provider is already anonymous and cannot be traced back.</p>
        </div>
        <div className="faqQuestionContainer">
          <h2 className="faq-question">Is your product safe?</h2>
          <p>Nobody has claimed that doing drugs was safe. However as long as you follow the guide in the Safety section there should not be any issues. Do not take MDMA if you are also under any perscriptions or doing any other drugs. It is also recomended not to take MDMA with any sort of alcohol as it might cause irreversable damage to your immune system and overall health.</p>
        </div>
        <div className="faqQuestionContainer">
          <h2 className="faq-question">Is any of this real?</h2>
          <p>No. Of course not. Do you think we are dumb enough to open a clear web drug shop. We hosted this on Google Cloud for god's sake. Did you honestly think that a made up website from a Netflix series would be the best place to score MDMA?</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;