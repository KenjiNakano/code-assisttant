import React, { useState } from 'react';
import WelcomeMessage from '../components/HomePage/WelcomeMessage';
import AppDescriptionInput from '../components/HomePage/AppDescriptionInput';
import SubmitButton from '../components/HomePage/SubmitButton';
import SubmitButtonWithoutTranslation from '../components/HomePage/SubmitButtonWithoutTranslation';

const Home: React.FC = () => {
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);

  const addMessage = (text: string, isUser: boolean) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUser }]);
  };

  const handleResponse = (response: string) => {
    setResponse(response);
    addMessage(response, false);
  };

  const handleSubmit = (description: string) => {
    setDescription(description);
    addMessage(description, true);
    setDescription('');
  };

  const chatContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    whiteSpace: 'pre-line',
  };

  const userMessageStyle: React.CSSProperties = {
    alignSelf: 'flex-end',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    padding: '8px',
    marginBottom: '8px',
    maxWidth: '80%',
    whiteSpace: 'pre-wrap',
  };

  const botMessageStyle: React.CSSProperties = {
    ...userMessageStyle,
    alignSelf: 'flex-start',
    backgroundColor: '#d1e7dd',
  };

  const ButtonWithCaption = ({ caption, onClick }: { caption: string; onClick: () => void }) => {
    return (
      <button onClick={onClick}>
        {caption}
      </button>
    );
  };
  
  const handleButtonClick = (caption: string) => {
    setDescription(caption);
  };

  return (
    <div>
      <WelcomeMessage />
      <div style={chatContainerStyle}>
        {messages.map((message, index) => (
          <div key={index} style={message.isUser ? userMessageStyle : botMessageStyle}>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <ButtonWithCaption caption="詳細な実装のためのQA" onClick={() => handleButtonClick(`以下のアプリケーションの説明を読み、詳細な実装方法を提供するために必要なことは何でも聞いてください。
また、詳細な実装方法を提供するために必要な質問が無くなるまで、質問があとどのくらい続きそうかを教えて下さい。
また、詳細な実装方法を提供するために必要な質問がなくなったらそのことを教えて下さい。
そして、詳細な実装方法を教えてください。
アプリの説明：(アプリの説明を記載してください)
あなた：`)} />
        <ButtonWithCaption caption="ユーザージャーニーの洗練" onClick={() => handleButtonClick(`今からユーザージャーニーの概略を書きます。これを読んでください。
それから、誰もが同じアプリを想像できてコードを書き始めることができるように、ユーザージャーニーを更新してください。
このとき、ページ名やコンポーネント名を変えるなど、機能をよりよく表現するために必要な修正を加えてください。
さらに、より良いユーザージャーニーにするための提案があれば教えてください。
ユーザージャーニー：
(ここにユーザージャーニーを記載してください)
あなた：`)} />
        <ButtonWithCaption caption="「あなたなら上に載せたユーザージャーニーをどう変えますか？」と聞く" onClick={() => handleButtonClick(`あなたは超強力なエンジニアとして振る舞ってください。
あなたなら上に載せたユーザージャーニーをどう変えますか？優れたプログラマーであるあなたは、より良いユーザー体験を提供するために、ユーザージャーニー全体を修正できます。
たとえそれが根本的な変更であっても、どのようなレベルの修正でも構いません。`)} />
        <ButtonWithCaption caption="ユーザージャーニーからコンポーネントの提案" onClick={() => handleButtonClick(`次のユーザージャーニーを読み、すべての画面をリストアップしてください。さらに、ある瞬間に画面に表示されるすべてのコンポーネント、画面レイアウト、各コンポーネントのユーザーイベントに対するすべての反応をリストアップしてください。
ユーザージャーニー：
(ここにユーザージャーニーを記載してください)
使用する言語やフレームワーク：
(ここに使用する言語やフレームワークを記載してください)
あなた：`)} />
        <ButtonWithCaption caption="ディレクトリ構成の提案" onClick={() => handleButtonClick(`超熟練プログラマーであるあなたは、下記のユーザージャーニーと画面構成をもとに、このアプリプロジェクトのディレクトリ構造を示してください。
そして、各ファイルで何がコーディングされているのかを具体的に説明してください。
ユーザージャーニー：
(ここにユーザージャーニーを記載してください)
画面構成：
(ここに画面構成を記載してください)
使用する言語やフレームワーク：
(ここに使用する言語やフレームワークを記載してください)
あなた：`)} />
        <ButtonWithCaption caption='「ディレクトリ構造に従って実装全体の流れを示してください」と言う' onClick={() => handleButtonClick(`超熟練プログラマーのあなたに、この指示の最後にもう一度紹介するディレクトリ構造に厳密に従って、実装全体の流れを示してもらいたいです。
各ステップでどのコンポーネントを実装しているかも合わせて書いてください。

ディレクトリ構造：
（ここにディレクトリ構造を記載してください）

あなた：`)} />

        <ButtonWithCaption caption='「コンポーネントを実装してください」と言う' onClick={() => handleButtonClick(`あなたは(ファイル名)を実装します。
実装フローの関連する部分を読んで、ステップ・バイ・ステップで手順を教えてください。同時にそれぞれのステップで変更したコードを示してください。

実装フロー：
(ここに実装フローを記載してください)

あなた：`)} />

        <ButtonWithCaption caption='ページの機能を復唱させる' onClick={() => handleButtonClick(`優秀なシステムエンジニアのあなたに(ページ名(例：ランディングページ))について質問です。
下記にユーザージャーニーの関連する部分を抜き出したので、このページがどのように機能するか教えてください。

ユーザージャーニー：
(ここにユーザージャーニーを記載してください)

あなた：`)} />

<ButtonWithCaption caption='「ページを実装してください」と言う' onClick={() => handleButtonClick(`あなたは(ページ名)を実装します。
下記にページがどのように機能するかを書いたので、どのように実装するか、ステップ・バイ・ステップで手順を教えてください。
使用するフレームワークは(フレームワーク名)、使用する言語は(言語名)です。
同時にそれぞれのステップで変更したコードを示してください。

ページの機能：
(ここにページの機能を記載してください)

あなた：`)} />

      </div>
      <AppDescriptionInput description={description} setDescription={setDescription} />
      <SubmitButton
        description={description}
        setResponse={handleResponse}
        onSubmit={handleSubmit}
      />
      <SubmitButtonWithoutTranslation
        description={description}
        setResponse={handleResponse}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Home;
