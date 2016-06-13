module Api
  class StorycardsController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def show
      respond_with(Storycard.find(params[:id]))
    end
  end
end