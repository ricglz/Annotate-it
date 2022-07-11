# frozen_string_literal: true

module Mutations
  class BaseMutation < GraphQL::Schema::RelayClassicMutation
    argument_class Types::BaseArgument
    field_class Types::BaseField
    input_object_class Types::BaseInputObject
    object_class Types::BaseObject

    private

    def viewer
      @viewer ||= context[:viewer]
    end

    def not_found(object)
      I18n.t('errors.not_found', object.model_name.human.lowercase)
    end

    def not_part_of_user(object)
      I18n.t('errors.not_part_of_user', object.model_name.human.lowercase)
    end

    def object_errors(object)
      object.errors.full_messages.to_sentence
    end
  end
end
