import {useStaticConfiguration} from '../core/configuration';
import {useEditorState} from '../state/editor';
import {useTerminalState} from '../state/terminal';
import {createEffect, createMemo, createSignal, on} from 'solid-js';

interface UseTabIconOptions {
  withDefault: boolean;
}

export const useTabIcon = (options: UseTabIconOptions) => {
  const [icon, setIcon] = createSignal<any>();
  const configuration = useStaticConfiguration();
  // ATTENTION: Cannot use selector due to store structure!!!
  const editorState = useEditorState();
  const terminalState = useTerminalState();

  const languageIcons = createMemo(() => {
    const lngConfig = configuration.languages.find(
      ({id}) => id === editorState.languageId,
    );
    if (!lngConfig) {
      return [];
    }
    return lngConfig.icons;
  });

  const currentIcon = createMemo(() => {
    if (!terminalState.tabName) {
      return null;
    }
    const matchedIcons = languageIcons().filter(icon => {
      return icon.matcher.test(terminalState.tabName!);
    });

    return (
      matchedIcons[matchedIcons.length - 1] ??
      (options.withDefault ? languageIcons()[0] : null)
    );
  });

  createEffect(on(currentIcon, setIcon));

  return [icon];
};
