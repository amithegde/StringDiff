import * as vscode from 'vscode';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "stringdiff" is now active!');

	// Register the 'stringdiff.diff' command defined in package.json
	const disposable = vscode.commands.registerCommand('stringdiff.diff', async () => {
		// Create two untitled documents
		const leftDoc = await vscode.workspace.openTextDocument({ content: '', language: 'plaintext' });
		const rightDoc = await vscode.workspace.openTextDocument({ content: '', language: 'plaintext' });

		// Open both files in the diff editor
		await vscode.commands.executeCommand('vscode.diff', leftDoc.uri, rightDoc.uri, 'String Diff (Editable)');

		// Set up a status bar item for guidance
		const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
		statusBarItem.text = "$(compare-changes) String Diff Active";
		statusBarItem.tooltip = "Both panes are editable. Paste your strings to compare.";
		statusBarItem.show();

		// Clean up when the diff editor is closed
		const closeDisposable = vscode.window.onDidChangeVisibleTextEditors(editors => {
			// Check if our diff editor is still open
			const diffStillOpen = editors.some(editor =>
				editor.document === leftDoc || editor.document === rightDoc
			);

			if (!diffStillOpen) {
				// Clean up
				try {
					statusBarItem.dispose();
					closeDisposable.dispose();
					// VS Code will handle cleanup of untitled documents
				} catch (e) {
					console.error('Error during cleanup:', e);
				}
			}
		});

		// Add these disposables to the context
		context.subscriptions.push(statusBarItem);
		context.subscriptions.push(closeDisposable);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {
	// Any cleanup needed when the extension is deactivated
}
