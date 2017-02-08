# frozen_string_literal: true
# helper for tree drawing
module TagsTreeHelper
  def nested_nodes(tree, index)
    tree.map.with_index(1) do |(node, sub_nodes), inner_index|
      if sub_nodes.class == Hash
        index += inner_index
        content_tag(:div, node, data: { toggle: 'collapse',
                                        target: "##{index}" },
                                aria: { expanded: 'false',
                                        controls: index },
                                class: 'collapsable-item collapsable-item__inner
                                        collapsed') +
          content_tag(:div, content_tag(:ul, nested_nodes(sub_nodes,
                                               (index.to_s + '1').to_i)),
                                             class: 'collapse ul-no-margin',
                                             id: index)
      else
        content_tag(:p, "#{node} : #{sub_nodes}", class: 'collapsable-item__p')
      end
    end.join.html_safe
  end
end
