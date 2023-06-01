import React from "react";
import YouTube from "react-youtube";
// import { TwitterTimelineEmbed } from "react-twitter-embed";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormattedMessage, useIntl } from "react-intl";
import LayoutWrapper from "../../components/LayoutWrapper";
import { useForm } from "react-hook-form";
import { IQuestion } from "../../models/question.model";
import QuestionForm from "./QuestionForm";
import RedirectCard from "../../components/RedirectCard";
import HotImage from "../../assets/hot.png";
import { useSendQuestion } from "../../services/contact.services";
import { enqueueSnackbar } from "notistack";

const Home: React.FC = () => {
  const intl = useIntl();
  const QuestionFormSchema = yup.object({
    email: yup
      .string()
      .email(intl.formatMessage({ id: "INPUT.EMAIL_TYPE" }))
      .required(intl.formatMessage({ id: "INPUT.EMAIL_REQUIRED" })),
    question: yup
      .string()
      .required(intl.formatMessage({ id: "INPUT.QUESTION_REQUIRED" })),
  });

  const useFormReturn = useForm<IQuestion>({
    resolver: yupResolver(QuestionFormSchema),
  });

  const { reset } = useFormReturn;

  const { mutate: sendQuestion } = useSendQuestion(
    (success) => {
      enqueueSnackbar(success.message, {
        variant: "success",
      });
      reset({
        email: "",
        question: "",
      });
    },
    (error) => {
      enqueueSnackbar(error.message, {
        variant: "error",
      });
    }
  );

  const submitButtonFormHandler = (formData: IQuestion) => {
    sendQuestion(formData);
  };

  return (
    <main className="mt-10">
      <LayoutWrapper className="space-y-20">
        <section>
          <QuestionForm
            useFormInstance={useFormReturn}
            submitQuestionForm={submitButtonFormHandler}
          />
        </section>

        <section className="space-y-5">
          <h2 className="text-white text-2xl text-center font-light tracking-widest">
            <FormattedMessage id="OUR_PRODUCTS" />
          </h2>
          <RedirectCard
            href="/"
            title="HOT OFFER!"
            subtitle="Our main blockchain platform"
            image={HotImage}
          />
          <RedirectCard
            href="/"
            title="Blockchain"
            subtitle="Our main blockchain platform"
            image={HotImage}
          />
          <RedirectCard
            href="https://coart.biz/"
            title="Marketplace"
            subtitle="Our main marketplace platform"
            image={HotImage}
          />
          <RedirectCard
            href="https://t.me/coart_metaverse"
            title="Metaverse"
            subtitle="Our main metaverse platform"
            image={HotImage}
          />
        </section>

        <section className="space-y-5">
          <h2 className="text-white text-2xl text-center font-light tracking-widest">
            <FormattedMessage id="PODCAST_APPEARANCES" />
          </h2>
          <YouTube
            className="w-full"
            videoId="jfKfPfyJRdk"
            iframeClassName="w-full h-96 rounded-lg"
          />
        </section>

        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 800 }}
        /> */}
      </LayoutWrapper>
    </main>
  );
};

export default Home;
