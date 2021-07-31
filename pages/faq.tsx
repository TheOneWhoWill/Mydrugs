import { GetStaticProps } from "next";

import { Question } from "@components/faq/question";
import qs from "@data/faq.json";

interface Props {
  questions: Question[];
}

export default function Faq({ questions }: Props) {
  return (
    <>
      <div className="faq">
        <h1>Frequently Asked Questions</h1>
        <div className="container">
          {questions.map((question, i) => (
            <Question {...question} key={i} />
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .faq {
            height: 87.5vh;
            overflow-y: scroll;
          }

          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-left: 10vh;
            margin-right: 10vh;
          }

          h1 {
            color: white;
            margin-top: 6vh;
            margin-bottom: 6vh;
            font-size: 4.75vh;
            line-height: 100px;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      questions: qs,
    },
  };
};
