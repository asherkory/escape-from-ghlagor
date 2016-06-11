module Api
  class GamesController < ApplicationController
    respond_to :json

    def index
      respond_with(Game.all)
    end

    def show
      respond_with(Game.find(params[:id]))
    end

    def create
      @game = Game.create(game_params)
      respond_with(@game)
    end 

    def update
      @game = Game.find(params[:id])
      @game.update(game_params)
      respond_with(@game)
    end

    def destroy
      respond_with(Game.destroy(params[:id]))
    end

    private

    def game_params
      params.require(:game).permit(:character_name)
    end
  end
end