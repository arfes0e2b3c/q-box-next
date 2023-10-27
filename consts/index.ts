import { MicroCMSResponse, qA } from '@/types'

export const noResultQAData: qA = {
  id: '0',
  createdAt: '2023-03-06T15:00:00.000Z',
  updatedAt: '2023-03-06T15:00:00.000Z',
  publishedAt: '2023-03-06T15:00:00.000Z',
  revisedAt: '2023-03-06T15:00:00.000Z',
  question: '検索結果が見つかりませんでした...',
  answer: '他のキーワードで検索してみてください...!',
  replyTweetId: '',
  state: 'answered',
  replies: [],
}

export const mockQAResponse: MicroCMSResponse = {
  contents: [
    {
      id: '63u2t6rjoqv',
      createdAt: '2023-10-19T04:21:51.570Z',
      updatedAt: '2023-10-19T12:47:05.846Z',
      publishedAt: '2023-10-19T04:21:51.570Z',
      revisedAt: '2023-10-19T12:47:05.846Z',
      question: 'ビターくんって何歳ですか？',
      answer: '存じ上げないです。ネコサークルさんなら分かるのでしょうか……？(錨)',
      replyTweetId: '1714986525761634514',
      state: 'requirement',
      replies: [],
    },
    {
      id: 'udwxso7coo',
      createdAt: '2023-10-18T15:48:06.786Z',
      updatedAt: '2023-10-18T22:18:42.892Z',
      publishedAt: '2023-10-18T15:48:06.786Z',
      revisedAt: '2023-10-18T22:18:42.892Z',
      question: '履修確認・訂正期間に追加で履修登録することはできますか？',
      answer:
        '履修登録期間(昨日まで)に1科目でも登録をしていれば、履修確認・訂正期間でも追加で登録することができます。（ささ）',
      replyTweetId: '1714767989969653933',
      state: 'answered',
      replies: [],
    },
    {
      id: 'gpzhrm0d4tm',
      createdAt: '2023-10-11T09:13:59.975Z',
      updatedAt: '2023-10-14T02:33:29.099Z',
      publishedAt: '2023-10-11T09:13:59.975Z',
      revisedAt: '2023-10-14T02:33:29.099Z',
      question:
        '都社共1年です。\n都社共は卒業のために外国語科目を12単位取らなくてはならないそうですが、英語6単位＋初修外国語4単位以外の2単位を何で取ろうか悩んでいます。\n1年次の初修外国語4単位に加え検定外国語科目として2単位を参入することは可能なのでしょうか？\nまた、もし都社共の方がいらっしゃったらその2単位分を何で取るのがメジャーなのか教えていただきたいです。',
      answer: 'すみません、履修案内の記載からは判断できなかったので情報提供いただきたいです。(錨)',
      replyTweetId: '1713020160318288029',
      state: 'requirement',
      replies: [
        {
          id: 'rgwe-8de9bb',
          createdAt: '2023-10-13T14:36:23.348Z',
          updatedAt: '2023-10-14T02:33:27.919Z',
          publishedAt: '2023-10-13T14:36:23.348Z',
          revisedAt: '2023-10-14T02:33:27.919Z',
          replySentence:
            '都市科の3年です。学科は違いますが、初修外国語と検定(共に中国語)両方取って単位認定し外国語の単位全て満たしました。私の周りにもそれやってる人何人かいます。',
          replyAnswer: 'this.sentence',
          isDeleted: false,
          replyFor: {
            id: 'gpzhrm0d4tm',
          },
        },
      ],
    },
    {
      id: 'byh2k4l2nce9',
      createdAt: '2023-10-07T06:08:13.217Z',
      updatedAt: '2023-10-08T15:44:41.717Z',
      publishedAt: '2023-10-07T06:08:13.217Z',
      revisedAt: '2023-10-08T15:44:41.717Z',
      question:
        '教職課程をとっているのですが、教員採用試験に関する資料などを本学で閲覧できるところってありますか？',
      answer: 'ちょっと分からないです。教育学部の方に教えていただきたく思います。(れいぱぱれ)',
      replyTweetId: '1711001283182903657',
      state: 'requirement',
      replies: [
        {
          id: 't2fl48reu96r',
          createdAt: '2023-10-08T15:44:40.045Z',
          updatedAt: '2023-10-09T09:33:31.589Z',
          publishedAt: '2023-10-08T15:44:40.045Z',
          revisedAt: '2023-10-09T09:33:31.589Z',
          replySentence:
            '経済学部です。ゼミの単位数へのカウントについて質問があります。ゼミは前期に2単位、後期に2単位としてカウントされますか？つまり、後期の上限が28単位の場合、ゼミを除いて26単位が卒業要件単位数に含まれるという認識であってますでしょうか。',
          isDeleted: true,
          replyFor: {
            id: 'byh2k4l2nce9',
          },
        },
      ],
    },
    {
      id: 'bqx-53hufd',
      createdAt: '2023-10-04T15:45:14.170Z',
      updatedAt: '2023-10-06T16:12:59.251Z',
      publishedAt: '2023-10-04T15:45:14.170Z',
      revisedAt: '2023-10-06T16:12:59.251Z',
      question:
        '理工1年です。\n一般教養の抽選とはなんですか？\n全ての一般教養の科目に対してあるのでしょうか？興味のある授業全部仮登録しているのですが…',
      answer:
        '履修抽選は、担当教員が定めた定員を超えて仮登録が行われた際に、履修人数を絞るためのものです。そのため、受講調整はすべての科目で行われるわけではありません。(錨)',
      replyTweetId: '1709917082236899563',
      state: 'answered',
      replies: [
        {
          id: 'kcilflxx3s',
          createdAt: '2023-10-06T16:12:57.896Z',
          updatedAt: '2023-10-07T11:48:12.410Z',
          publishedAt: '2023-10-06T16:12:57.896Z',
          revisedAt: '2023-10-07T11:48:12.410Z',
          replySentence:
            '仮登録だけして履修登録をせずに講義資料をダウンロードし、自分で勉強することは可能ですか？',
          isDeleted: true,
          replyFor: {
            id: 'bqx-53hufd',
          },
        },
      ],
    },
    {
      id: '4o7dn3me2ikm',
      createdAt: '2023-10-04T14:38:42.146Z',
      updatedAt: '2023-10-04T14:59:42.817Z',
      publishedAt: '2023-10-04T14:38:42.146Z',
      revisedAt: '2023-10-04T14:59:42.817Z',
      question:
        '経営１年です。入学時にTOE FLのスコアが４５０点以上だったのですが、この場合、２月にいかなる点数を取っても英語系(英語lrとか？)の単位は取得できますか？\n',
      answer:
        'いいえ。2月に行われるTOEFLは英語LRの単位認定試験も兼ねているので、ここで430点未満を取ってしまうと英語LRは不可となります。(れいぱぱれ)',
      replyTweetId: '1709579121020616929',
      state: 'answered',
      replies: [
        {
          id: '8z2sy7zbr9z',
          createdAt: '2023-10-04T14:59:40.826Z',
          updatedAt: '2023-10-05T00:43:02.745Z',
          publishedAt: '2023-10-04T14:59:40.826Z',
          revisedAt: '2023-10-05T00:43:02.745Z',
          replySentence:
            '先ほどの履修登録漏れについてですが、履修登録画面のスクリーンショットを保存していません。',
          isDeleted: true,
          replyFor: {
            id: '4o7dn3me2ikm',
          },
        },
      ],
    },
    {
      id: '14itrhkmm',
      createdAt: '2023-10-04T13:06:16.358Z',
      updatedAt: '2023-10-04T13:51:56.506Z',
      publishedAt: '2023-10-04T13:06:16.358Z',
      revisedAt: '2023-10-04T13:51:56.506Z',
      question:
        '1年生です！般教の履修抽選はどのように行われますか？履修登録したら抽選に申し込めたということですか？？',
      answer:
        '般教(全学教育科目)の履修抽選については、初回授業日の24時までに授業支援システムで仮登録を行うことによって抽選に参加したことになります。抽選が行われる前に履修登録することはできません。(れいぱぱれ)',
      replyTweetId: '1709556021721727349',
      state: 'answered',
      replies: [
        {
          id: 'ked3qrzme',
          createdAt: '2023-10-04T13:51:54.976Z',
          updatedAt: '2023-10-04T15:07:03.271Z',
          publishedAt: '2023-10-04T13:51:54.976Z',
          revisedAt: '2023-10-04T15:07:03.271Z',
          replySentence:
            '経済学部です。EAPにはKクラスとQクラスがあると思うのですが、どちらがレベル高いですか？',
          isDeleted: true,
          replyFor: {
            id: '14itrhkmm',
          },
        },
      ],
    },
    {
      id: 'peq70nt0u',
      createdAt: '2023-10-03T06:09:23.156Z',
      updatedAt: '2023-10-03T15:07:24.564Z',
      publishedAt: '2023-10-03T06:09:23.156Z',
      revisedAt: '2023-10-03T15:07:24.564Z',
      question: '教育1年です。成績が実家に郵送される？そうですが、成績統計も載っているんですか？',
      answer:
        '現物を確認できなかったので定かではないですが、送付されるのは成績証明書に該当する書類で、学務登録システムから見ることができるような成績統計は載っていなかったように思います。ご存じの方いたら教えていただきたいです。（ささ）',
      replyTweetId: '1709221808673808449',
      state: 'requirement',
      replies: [
        {
          id: '9oan0rxm9e',
          createdAt: '2023-10-03T15:07:22.936Z',
          updatedAt: '2023-10-03T15:08:41.555Z',
          publishedAt: '2023-10-03T15:07:22.936Z',
          revisedAt: '2023-10-03T15:08:41.555Z',
          replySentence:
            '理工２年です。\n私のところには本日届きましたが、成績統計は載っておらず、「科目名と成績」「取得単位数」などのみでした。理工の話なので教育とは異なるかもしれませんが参考までに。',
          replyAnswer: 'this.sentence',
          isDeleted: false,
          replyFor: {
            id: 'peq70nt0u',
          },
        },
      ],
    },
    {
      id: '0i3lcw8w7k',
      createdAt: '2023-10-02T06:25:37.890Z',
      updatedAt: '2023-10-02T14:16:04.577Z',
      publishedAt: '2023-10-02T06:25:37.890Z',
      revisedAt: '2023-10-02T14:16:04.577Z',
      question:
        '都市科学部建築学科1年です。かながわ地域学と建築構法I・IIが被っているのですが、建築構法をとらないと今後の授業について行くことができなくなる、皆さんはどちらを取っているのでしょうか？\n\nお手伝いサークルさん経由ですみません、拡散お願いします',
      answer: '建築学科の皆さまに情報をお寄せいただきたいです。(錨)',
      replyTweetId: '1708848304254333157',
      state: 'requirement',
      replies: [
        {
          id: 'nnjhjxa0uhs',
          createdAt: '2023-10-02T14:07:43.256Z',
          updatedAt: '2023-10-02T14:16:03.685Z',
          publishedAt: '2023-10-02T14:07:43.256Z',
          revisedAt: '2023-10-02T14:16:03.685Z',
          replySentence:
            '建築構法一択です。ほとんどの人は建築構法を一年生のうちに取りますし、建築士の試験を受けるために最終的に取らなければいけません。構法の内容は他の授業にも関わってくるため先延ばしにする理由もないです。かながわ地域学はいつでも取れます、というか取らない人もいます。',
          replyAnswer: 'this.sentence',
          isDeleted: false,
          replyFor: {
            id: '0i3lcw8w7k',
          },
        },
      ],
    },
    {
      id: 'whr2f4q-c5a',
      createdAt: '2023-09-27T14:31:21.918Z',
      updatedAt: '2023-09-30T09:29:41.586Z',
      publishedAt: '2023-09-27T14:31:21.918Z',
      revisedAt: '2023-09-30T09:29:41.586Z',
      question:
        '経営1年です。秋学期にインターンをしようと思ってるのですが、それは単位として認められますか？また、その場合に何単位分になるのでしょうか？',
      answer:
        '経済学部ではインターンシップが2単位として認定されるケースがありますが、経営学部にも同様のものがあるかは分かりません。(れいぱぱれ)',
      replyTweetId: '1708051467578528252',
      state: 'requirement',
      replies: [
        {
          id: 'krxq6n2y8a',
          createdAt: '2023-09-30T07:10:16.223Z',
          updatedAt: '2023-09-30T09:29:40.758Z',
          publishedAt: '2023-09-30T07:10:16.223Z',
          revisedAt: '2023-09-30T09:29:40.758Z',
          replySentence:
            '経営三年ですが、経営学部インターンシップとして学部科目に組み入れることができます。\n詳しくは履修案内を見て頂きたいのですが、始める際と終わる際に書類を提出すれば、90時間1単位を目安として最大6単位まで認定されます。',
          replyAnswer: 'this.sentence',
          isDeleted: false,
          replyFor: {
            id: 'whr2f4q-c5a',
          },
        },
      ],
    },
    {
      id: 'gkarc9hezv',
      createdAt: '2023-09-23T13:24:21.960Z',
      updatedAt: '2023-09-29T08:52:22.635Z',
      publishedAt: '2023-09-23T13:24:21.960Z',
      revisedAt: '2023-09-29T08:52:22.635Z',
      question:
        '理工学部の一年です。院転のことを考えているのですが、一年のうちから準備したり考えておくべきことなどありますか。',
      answer: '院試経験者の方に情報提供いただきたいです。(錨)',
      replyTweetId: '1707037412772511829',
      state: 'requirement',
      replies: [
        {
          id: 'y03kd794wg',
          createdAt: '2023-09-29T08:52:21.114Z',
          updatedAt: '2023-09-29T09:11:30.646Z',
          publishedAt: '2023-09-29T08:52:21.114Z',
          revisedAt: '2023-09-29T09:11:30.646Z',
          replySentence:
            '理工学部生が横浜駅からバスに乗るならどのバスの定期を買うのが利便性が良いでしょうか。',
          isDeleted: true,
          replyFor: {
            id: 'gkarc9hezv',
          },
        },
      ],
    },
    {
      id: 'bielk9rjj',
      createdAt: '2023-09-22T04:40:54.958Z',
      updatedAt: '2023-09-26T02:22:05.281Z',
      publishedAt: '2023-09-22T04:40:54.958Z',
      revisedAt: '2023-09-26T02:22:05.281Z',
      question:
        '都市科学部1年です\n成績開示がされましたが、なぜ不可になってしまったのか分からない科目があります。調べたところ、1週間以内に大学に行かなければならないとのことですが、免許合宿に来ており行くことが難しいです。このような場合どのようにすれば良いのか分かりますか？',
      answer: '学務に事情を説明して、指示を仰いでください。(錨)',
      replyTweetId: '1706494309422518385',
      state: 'answered',
      replies: [
        {
          id: 'o6q4j4p4xdhu',
          createdAt: '2023-09-24T05:55:09.303Z',
          updatedAt: '2023-09-26T02:22:04.063Z',
          publishedAt: '2023-09-24T05:55:09.303Z',
          revisedAt: '2023-09-26T02:22:04.063Z',
          replySentence:
            '1ヶ月以内にメールで成績確認申請書みたいなの送れば対応していただけないですか？誤情報だったら申し訳ないのですが、、',
          replyAnswer: 'this.sentence',
          isDeleted: false,
          replyFor: {
            id: 'bielk9rjj',
          },
        },
      ],
    },
    {
      id: '0o27a6j_itp0',
      createdAt: '2023-10-18T05:18:43.795Z',
      updatedAt: '2023-10-18T10:12:55.517Z',
      publishedAt: '2023-10-18T05:18:43.795Z',
      revisedAt: '2023-10-18T10:12:55.517Z',
      question: '経済です。受講調整外れた授業を履修登録したらどうなりますか',
      answer: 'エラーが表示され、履修登録できません。(錨)',
      replyTweetId: '1714585339392892988',
      state: 'answered',
      replies: [],
    },
    {
      id: 'y38lhqu5mut',
      createdAt: '2023-10-18T05:11:29.968Z',
      updatedAt: '2023-10-18T10:23:33.427Z',
      publishedAt: '2023-10-18T05:11:29.968Z',
      revisedAt: '2023-10-18T10:23:33.427Z',
      question:
        '経営学部2年です。経営者が語るこれからの企業戦略の仮登録を2から始まるコードで行なっていて、経営学部のコードで仮登録しようと思ったのですが、見つかりません。どうすれば良いでしょうか？',
      answer:
        '複数の時間割コードで開講される科目は、資料掲載･案内発信を1つのコードのみで行う場合があります。心配であればQ&Aで質問するのが良いと思いますが、3で始まるものを仮登録できていなくても受講するうえで問題にはならないはずです。(錨)',
      replyTweetId: '1714588014524166434',
      state: 'answered',
      replies: [],
    },
    {
      id: '3vzmsegb5c0',
      createdAt: '2023-10-17T16:52:35.150Z',
      updatedAt: '2023-10-18T10:11:29.912Z',
      publishedAt: '2023-10-17T16:52:35.150Z',
      revisedAt: '2023-10-18T10:11:29.912Z',
      question:
        '理工2年です。一般教養で同じ先生のオンデマンド系授業を2つ受講しようと思っているのですが問題ないですよね？',
      answer: 'はい、特に問題ないです。(錨)',
      replyTweetId: '1714584980318490829',
      state: 'answered',
      replies: [],
    },
    {
      id: 'fznllcvay',
      createdAt: '2023-10-17T14:06:41.810Z',
      updatedAt: '2023-10-17T15:22:51.109Z',
      publishedAt: '2023-10-17T14:06:41.810Z',
      revisedAt: '2023-10-17T15:22:51.109Z',
      question: '都市科1年です。社会科学の歴史という般教は楽単が教えて欲しいです',
      answer: '授業の評判についてはお答えできません。（ささ）',
      replyTweetId: '1714300947097342237',
      state: 'answered',
      replies: [],
    },
    {
      id: '4c5v4s1f1',
      createdAt: '2023-10-17T13:25:55.122Z',
      updatedAt: '2023-10-19T12:46:24.767Z',
      publishedAt: '2023-10-17T13:25:55.122Z',
      revisedAt: '2023-10-19T12:46:24.767Z',
      question:
        '都市科学部1年です。\n成績表が郵送で届かないのですが、いつ頃発送されるのでしょうか。',
      answer: '都市科学部の2年以上の方に情報提供いただきたいです。(錨)',
      replyTweetId: '1714986353078030704',
      state: 'requirement',
      replies: [],
    },
    {
      id: 'j2761omjtxxn',
      createdAt: '2023-10-17T10:44:34.070Z',
      updatedAt: '2023-10-17T13:31:13.273Z',
      publishedAt: '2023-10-17T10:44:34.070Z',
      revisedAt: '2023-10-17T13:31:13.273Z',
      question: '理工1年です。インフルエンザに感染した際は授業ごとの欠席連絡のみで大丈夫ですか？',
      answer: 'はい、それで問題ないと思います。(錨)',
      replyTweetId: '1714272853925957836',
      state: 'answered',
      replies: [],
    },
    {
      id: 'pccz39-2g5jl',
      createdAt: '2023-10-17T09:58:05.464Z',
      updatedAt: '2023-10-18T10:10:17.958Z',
      publishedAt: '2023-10-17T09:58:05.464Z',
      revisedAt: '2023-10-18T10:10:17.958Z',
      question:
        '経営4年です。\n秋学期、単位を取り終わっていれば、履修登録は自分のゼミと卒論だけで良いんですよね…？',
      answer: '他の卒業要件を満たしているならそれで問題ないと思います。(錨)',
      replyTweetId: '1714584678383153292',
      state: 'answered',
      replies: [],
    },
    {
      id: '2any032omu',
      createdAt: '2023-10-17T05:37:28.728Z',
      updatedAt: '2023-10-17T06:39:49.211Z',
      publishedAt: '2023-10-17T05:37:28.728Z',
      revisedAt: '2023-10-17T06:39:49.211Z',
      question: '理工学部です\n第5タームの授業の履修登録も明日までにしないとダメなのですか',
      answer: 'はい、その通りです。(れいぱぱれ)',
      replyTweetId: '1714169322019729909',
      state: 'answered',
      replies: [],
    },
  ],
  totalCount: 2097,
  offset: 0,
  limit: 10,
}
