module Api
  class ItemsController < ApplicationController
    skip_before_filter :verify_authenticity_token
    respond_to :json

    def index
      respond_with(Item.all)
    end

    def show
      respond_with(Item.find(params[:id]))
    end

    def create
      @item = Item.create(item_params)
      respond_with(@item)
    end 

    def update
      @item = Item.find(params[:id])
      @item.update(item_params)
      respond_with(@item)
    end

    def destroy
      respond_with(Item.destroy(params[:id]))
    end

    private

    def item_params
      params.require(:item).permit(:name, :type)
    end
  end
end