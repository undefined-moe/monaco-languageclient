/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2018-2022 TypeFox GmbH (http://www.typefox.io). All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import { INotificationService, initialize, NotificationMessage, INotification, INotificationHandle, INotificationActions, IPromptChoice, IPromptChoiceWithMenu, IPromptOptions, IStatusMessageOptions, Severity } from 'vscode/services';
import { IDisposable } from 'monaco-editor/esm/vs/editor/editor.api.js';

class MyCustomNotificationService implements INotificationService {
    onDidAddNotification: any;
    onDidRemoveNotification: any;
    onDidChangeDoNotDisturbMode: any;
    _serviceBrand: undefined;
    doNotDisturbMode: boolean;

    constructor() {
        console.log('Yahoo!');
    }

    info(message: NotificationMessage | NotificationMessage[]): void {
        console.log(`info: ${message}`);
    }

    warn(message: NotificationMessage | NotificationMessage[]): void {
        console.log(`warn: ${message}`);
    }

    error(message: NotificationMessage | NotificationMessage[]): void {
        console.log(`error: ${message}`);
    }

    notify(notification: INotification): MyNotificationHandle {
        console.log(`notify: ${notification}`);
        return new MyNotificationHandle();
    }

    prompt(severity: Severity, message: string, choices: (IPromptChoice | IPromptChoiceWithMenu)[], options?: IPromptOptions): INotificationHandle {
        console.log(`prompt: ${severity}, ${message}, ${choices}, ${options}`);
        throw new Error('Method not implemented.');
    }

    status(message: NotificationMessage, options?: IStatusMessageOptions): IDisposable {
        console.log(`status: ${message}, ${options}`);
        throw new Error('Method not implemented.');
    }
}

class MyNotificationHandle implements INotificationHandle {
    onDidClose: any;
    onDidChangeVisibility: any;
    progress: any;

    updateSeverity(severity: Severity): void {
        console.log(`updateSeverity: ${severity}`);
        throw new Error('Method not implemented.');
    }

    updateMessage(message: NotificationMessage): void {
        console.log(`updateMessage: ${message}`);
        throw new Error('Method not implemented.');
    }

    updateActions(actions?: INotificationActions): void {
        console.log(`updateActions: ${actions}`);
        throw new Error('Method not implemented.');
    }

    close(): void {
        throw new Error('Method not implemented.');
    }
}

export const initMyNotificationService = async () => {
    await initialize({
        get [INotificationService.toString()]() {
            return new MyCustomNotificationService();
        }
    });
};
