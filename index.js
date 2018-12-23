const Alexa = require('ask-sdk-core');

let repromptMessage = '次は何を歌いますか？'

const PriestOfTempleIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'PriestOfTempleIntent';
  },
  handle(handlerInput) {
    speechOutput = `
      せっせっせーの、よいよいよい。
      おーてーらーの、おーしょうさんが。
      かーぼーちゃーの、たぁねぇを、まーきーまーしーた。

      めーがーでーて、ふくらんで。
      はーながさいたら、枯れちゃって。
      忍法使って、空飛んで。
      東京タワーにぶつかって。
      ぐるっと回って、 じゃん けん ぽん！

   `
    return handlerInput.responseBuilder
      .speak(speechOutput + repromptMessage)
      .reprompt(repromptMessage)
      .getResponse();
  },
};

const YankeeDoodleIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'YankeeDoodleIntent';
  },
  handle(handlerInput) {
    speechOutput = `
      せっせっせーの、よいよいよい。
      アーループース、いちまんじゃーく。
      こーやーりーの、うーえーで。
      あーるーぺーん、おーどーりーを。
      さぁ、おどりましょ。
      らーん、ら、らん、ら、らん、らん、らん、ら。
      らーん、ら、らん、ら、らん、らん、ら。
      らーん、ら、らん、ら、らん、ら、らん、ら。
      らん、らん、らん、らん、らん。
      `
    return handlerInput.responseBuilder
      .speak(speechOutput + repromptMessage)
      .reprompt(repromptMessage)
      .getResponse();
  },
};

const ChatsuboIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'ChatsuboIntent';
  },
  handle(handlerInput) {
    speechOutput = `
      せっせっせーの、よいよいよい。
      ちゃ、ちゃ、つ、ぼ、ちゃ、つ、ぼ。
      ちゃ、つ、ぼ、にゃ、ふたが、ない。
      そこを、とって、ふたにしろ。
    `
    return handlerInput.responseBuilder
      .speak(speechOutput + repromptMessage)
      .reprompt(repromptMessage)
      .getResponse();
  },
};

const ZuizuiZukkorobashiIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'ZuizuiZukkorobashiIntent';
  },
  handle(handlerInput) {
    speechOutput = `
      せっせっせーの、よいよいよい。
      ずーい、ずーい、ずっころばーし。
      ごま、みそ、ずぃ。

      ちゃつぼに、おわれて。
      トッ、ピン、シャン。

      ぬけたら、どんどこしょ。
      たわらの、ねずみが。
      こーめ、くって、チュー。
      
      チュー、チュー、チュー。

      おとさんが、よんでも。
      おかさんが、よんでも。
      いきいっこなーしーよ。

      いどのまわりで、お茶碗かいたの、だあれ。
   `
    return handlerInput.responseBuilder
      .speak(speechOutput + repromptMessage)
      .reprompt(repromptMessage)
      .getResponse();
  },
};

const OrangeBlossomIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'OrangeBlossomIntent';
  },
  handle(handlerInput) {
    const speechOutput = `
      せっせっせーの、よいよいよい。
      みかんの花が、咲いている。
      思い出の道、おかの道。
      はるかに見える、青い海。
      お船がとおく　霞んでる。
      
      黒い煙を、はきながら。
      お船はどこへ、行くのでしょう。
      波に揺られて、島のかげ。
      汽笛がぼうと、鳴りました。
      
      何時か来た丘、母さんと。
      一緒に眺めた、あの島よ。
      今日もひとりで、見ていると。
      やさしい母さん、思われる
    `

    return handlerInput.responseBuilder
      .speak(speechOutput + repromptMessage)
      .reprompt(repromptMessage)
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest' 
        && request.intent.name === 'AMAZON.HelpIntent');
  },
  handle(handlerInput) {
    const speechOutput = 'せっせっせーから始まる手遊び歌を歌います。' +
      'たとえば、むかし手遊びで、おてらのおしょうさん。と話しかけてください';
    return handlerInput.responseBuilder
      .speak(speechOutput + repromptMessage)
      .reprompt(speechOutput)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechOutput = 'むかし手遊びを終わります。また遊ぼうね！'
    return handlerInput.responseBuilder
      .speak(speechOutput)
      .getResponse();
  }
};

const SessionEndRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('むかし手遊びを終わります')
      .getResponse();
  }
};

const ErrorHandler = {
  canHandle(handlerInput, error) {
    return true;
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak('調子が悪いので、むかし手遊びを終わります。またあそんでね。')
      .getResponse();
  }
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    PriestOfTempleIntentHandler,
    YankeeDoodleIntentHandler, 
    ChatsuboIntentHandler,
    ZuizuiZukkorobashiIntentHandler,
    OrangeBlossomIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndRequestHandler,
    ErrorHandler
  )
  .lambda();
