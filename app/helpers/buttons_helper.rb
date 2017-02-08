# frozen_string_literal: true
module ButtonsHelper
  def sm_btn(icon, text = '', path = '#', **options)
    btn_type = options[:type] || 'default'
    name = icon.present? ? fa_icon(icon, text: text) : text

    link_to(name, path, options.merge(class: "btn btn-sm btn-#{btn_type}"))
  end

  def add_btn(text = '', path = '#', **options)
    sm_btn('plus', text, path, options.merge(type: 'success'))
  end

  def edit_btn(text, path = '#', **options)
    sm_btn('cog', text, path, options.merge(type: 'default'))
  end

  def nav_link(text, path = '#', **options)
    btn_class = btn_class(options[:controller], options[:action])
    sm_btn(nil, text, path, options.merge(type: btn_class))
  end

  private

  def btn_class(controller, action)
    return 'primary' if link_active?(controller, action)
  end

  def link_active?(controller, action)
    controller == controller_name && action == action_name
  end
end
