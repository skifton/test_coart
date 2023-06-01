import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Input from "../../components/Form/Input";
import { IQuestion } from "../../models/question.model";
import Button from "../../components/Form/Button";
import { FormattedMessage, useIntl } from "react-intl";

interface IProps {
  useFormInstance: UseFormReturn<IQuestion>;
  submitQuestionForm: (formData: IQuestion) => void;
}

const LoginForm: React.FC<IProps> = ({
  useFormInstance,
  submitQuestionForm,
}) => {
  const intl = useIntl();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useFormInstance;

  return (
    <form
      className="space-y-10 text-center"
      onSubmit={handleSubmit(submitQuestionForm)}
    >
      <h2 className="text-white text-2xl font-light tracking-widest">
        <FormattedMessage id="CONTACT_US" />
      </h2>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChange={onChange}
            maxLength={30}
            placeholder="E-mail"
            className="w-full"
            wrapperClassName="text-center mb-10 mt-5"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
          />
        )}
      />
      <Controller
        name="question"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            textarea
            onChange={onChange}
            placeholder={intl.formatMessage({
              id: "INPUT.QUESTION_PLACEHOLDER",
            })}
            className="w-full"
            wrapperClassName="text-center mt-10"
            error={Boolean(errors.question?.message)}
            helperText={errors.question?.message}
          />
        )}
      />
      <Button className="w-full md:w-max" type="submit">
        <FormattedMessage id="BUTTON.SEND_QUESTION" />
      </Button>
    </form>
  );
};

export default LoginForm;
