- 国际化
  react-i18next
  i18next

- i18n 模块
  支持了namespace切换   有利于多人协作 避免 key 重复
  i18n.constance.ts 所有的语言种类 所有的命名空间
  i18n.translations.ts 
    按语言分命名空间分语言包
    [namespace.common]将命名空间交给文件打理  可读性 rdux action_types
  单例 axios 有点像

  语言的切换
