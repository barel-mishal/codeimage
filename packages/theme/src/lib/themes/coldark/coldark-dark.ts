import {buildExternalStylesheet} from '../../core';

const selection = '#3c526d';

export const coldarkDark = buildExternalStylesheet('coldark-dark')(`
  .cm-selectionBackground,
  .cm-focused .cm-selectionBackground,
  &::selection,
  *::selection {
    background-color: ${selection};
  }

  .cm-selectionMatch {
    background-color: ${selection};
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #8da1b9;
  }

  .token.punctuation {
    color: #e3eaf2;
  }

  .token.delimiter.important,
  .token.selector .parent,
  .token.tag,
  .token.tag .token.punctuation {
    color: #66cccc;
  }

  .token.attr-name,
  .token.boolean,
  .token.boolean.important,
  .token.number,
  .token.constant,
  .token.selector .token.attribute {
    color: #e6d37a;
  }

  .token.class-name,
  .token.key,
  .token.parameter,
  .token.property,
  .token.property-access,
  .token.variable {
    color: #6cb8e6;
  }

  .token.attr-value,
  .token.inserted,
  .token.color,
  .token.selector .token.value,
  .token.string,
  .token.string .token.url-link {
    color: #91d076;
  }

  .token.builtin,
  .token.keyword-array,
  .token.package,
  .token.regex {
    color: #f4adf4;
  }

  .token.function,
  .token.selector .token.class,
  .token.selector .token.id {
    color: #c699e3;
  }

  .token.atrule .token.rule,
  .token.combinator,
  .token.keyword,
  .token.operator,
  .token.pseudo-class,
  .token.pseudo-element,
  .token.selector,
  .token.unit {
    color: #e9ae7e;
  }

  .token.deleted,
  .token.important {
    color: #cd6660;
  }

  .token.keyword-this,
  .token.this {
    color: #6cb8e6;
  }

  .token.important,
  .token.keyword-this,
  .token.this,
  .token.bold {
    font-weight: bold;
  }

  .token.delimiter.important {
    font-weight: inherit;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .language-markdown .token.title,
  .language-markdown .token.title .token.punctuation {
    color: #6cb8e6;
    font-weight: bold;
  }

  .language-markdown .token.blockquote.punctuation {
    color: #f4adf4;
  }

  .language-markdown .token.code {
    color: #66cccc;
  }

  .language-markdown .token.hr.punctuation {
    color: #6cb8e6;
  }

  .language-markdown .token.url .token.content {
    color: #91d076;
  }

  .language-markdown .token.url-link {
    color: #e6d37a;
  }

  .language-markdown .token.list.punctuation {
    color: #f4adf4;
  }

  .language-markdown .token.table-header {
    color: #e3eaf2;
  }

  .language-json .token.operator {
    color: #e3eaf2;
  }

  .language-scss .token.variable {
    color: #66cccc;
  }
`);
