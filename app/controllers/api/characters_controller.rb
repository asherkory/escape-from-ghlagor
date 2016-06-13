module Api
  class CharactersController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
      respond_with(Character.all)
    end

    def show
      respond_with(Character.find(params[:id]))
    end

    def create
      @character = Character.new(character_params) 
      if @character.save 
        respond_to do |format|
          format.json { render :json => @character }
        end 
      end 
    end 

    def update
      @character = Character.find(params[:id])
      if @character.update(character_params) 
        respond_to do |format| 
          format.json { render :json => @character }
        end 
      end 
    end

    def destroy
      respond_with(Character.destroy(params[:id]))
    end

    private

    def character_params
      params.require(:character).permit(:name, :gender, :homeworld, :skin, :hair, :style, :personality)
    end
  end
end