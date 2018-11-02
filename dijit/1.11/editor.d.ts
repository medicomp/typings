/// <reference path="../../dojo/1.11/dojo.d.ts" />

declare namespace dijit._editor {
    /**
     * Base class for a "plugin" to the editor, which is usually
	 * a single button on the Toolbar and some associated code
     */
    interface _Plugin extends dijit.Destroyable {
        name: string;
        /**
         * Points to the parent editor
         */
        editor: dijit.Editor;
        /**
         * The CSS class name for the button node is formed from `iconClassPrefix` and `command`
         */
        iconClassPrefix: string;
        /**
         * Pointer to `dijit/form/Button` or other widget (ex: `dijit/form/FilteringSelect`)
		 * that is added to the toolbar to control this plugin.
		 * If not specified, will be created on initialization according to `buttonClass`
         */
        button: dijit._WidgetBase;
        /**
         * String like "insertUnorderedList", "outdent", "justifyCenter", etc. that represents an editor command.
		 * Passed to editor.execCommand() if `useDefaultCommand` is true.
         */
        command: string;
        /**
         * If true, this plugin executes by calling Editor.execCommand() with the argument specified in `command`.
         */
        useDefaultCommand: boolean;
        /**
         * Class of widget (ex: dijit.form.Button or dijit/form/FilteringSelect)
		 * that is added to the toolbar to control this plugin.
		 * This is used to instantiate the button, unless `button` itself is specified directly.
         */
        buttonClass: dojo.GenericConstructor<dijit._WidgetBase>;
        /**
         * Flag to indicate if this plugin has been disabled and should do nothing
		 * helps control button state, among other things.  Set via the setter api.
         */
        disabled: boolean;

        /**
         * Change state of the plugin to respond to events in the editor.
         *
         * This is called on meaningful events in the editor, such as change of selection
		 * or caret position (but not simple typing of alphanumeric keys).   It gives the
		 * plugin a chance to update the CSS of its button.
		 *
		 * For example, the "bold" plugin will highlight/unhighlight the bold button depending on whether the
		 * characters next to the caret are bold or not.
		 *
		 * Only makes sense when `useDefaultCommand` is true, as it calls Editor.queryCommandEnabled(`command`).
         */
        updateState(): void;
        /**
         * Tell the plugin which Editor it is associated with.
         */
        setEditor(editor: dijit.Editor): void;
        /**
         * Tell the plugin to add it's controller widget (often a button)
		 * to the toolbar.  Does nothing if there is no controller widget.
         */
        setToolbar(toolbar: dijit.Toolbar): void;

        set(name: string, value: any): this;
        get(name: string): any;

        set(name: 'disabled', value: boolean): this;
    }

    interface _PluginConstructor extends dojo._base.DeclareConstructor<_Plugin> { }

    /**
     * HTML serialization utility functions used by editor
     */
    interface html {
        /**
         * Adds escape sequences for special characters in XML: `&<>"'`.
		 * Optionally skips escapes for single quotes.
         */
        escapeXml(str: string, noSingleQuotes?: boolean): string;
        /**
         * Return string representing HTML for node and it's children
         */
        getNodeHtml(node: Node): string;
        /**
         * Pushes array of strings into output[] which represent HTML for node and it's children
         */
        getNodeHtmlHelper(node: Node, output: string[]): void;
        /**
         * Returns the html content of a DomNode's children
         */
        getChildrenHtml(node: Node): string;
        /**
         * Pushes the html content of a DomNode's children into out[]
         */
        getChildrenHtmlHelper(node: Node, output: string[]): void;
    }

    /**
     * dijit/_editor/RichText is the core of dijit.Editor, which provides basic
     * WYSIWYG editing features.
     *
     * dijit/_editor/RichText is the core of dijit.Editor, which provides basic
	 * WYSIWYG editing features. It also encapsulates the differences
	 * of different js engines for various browsers.  Do not use this widget
	 * with an HTML &lt;TEXTAREA&gt; tag, since the browser unescapes XML escape characters,
	 * like &lt;.  This can have unexpected behavior and lead to security issues
	 * such as scripting attacks.
     */
    interface RichText extends dijit._Widget, dijit._CssStateMixin {
        /**
         * whether to inherit the parent's width or simply use 100%
         */
        inheritWidth: boolean;
        /**
         * Specifies the name of a (hidden) `<textarea>` node on the page that's used to save
		 * the editor content on page leave.   Used to restore editor contents after navigating
		 * to a new page and then hitting the back button.
         */
        name: string;
        /**
         * semicolon (";") separated list of css files for the editing area
         */
        styleSheets: string;
        /**
         * Set height to fix the editor at a specific height, with scrolling.
		 * By default, this is 300px.  If you want to have the editor always
		 * resizes to accommodate the content, use AlwaysShowToolbar plugin
		 * and set height="".  If this editor is used within a layout widget,
		 * set height="100%".
         */
        height: string;
        /**
         * The minimum height that the editor should have.
         */
        minHeight: string;
        /**
         * Deferred which is fired when the editor finishes loading.
		 * Call myEditor.onLoadDeferred.then(callback) it to be informed
		 * when the rich-text area initialization is finalized.
         */
        onLoadDeferred: dojo.promise.Promise<void>;
        /**
         * Make tab key and shift-tab indent and outdent rather than navigating.
		 * Caution: sing this makes web pages inaccessible to users unable to use a mouse.
         */
        isTabIndent: boolean;
        /**
         * When true, disables the browser's native spell checking, if supported.
		 * Works only in Firefox.
         */
        disableSpellCheck: boolean;
        /**
         * The editor is disabled; the text cannot be changed.
         */
        disabled: boolean;

        /**
         * Transforms the node referenced in this.domNode into a rich text editing
         * node.
         *
         * Sets up the editing area asynchronously. This will result in
		 * the creation and replacement with an iframe.
         */
        open(element: Node): void;
        /**
         * add an external stylesheet for the editing area
         * @param uri Url of the external css file
         */
        addStyleSheet(uri: dojo._base.Url): void;
        /**
         * remove an external stylesheet for the editing area
         */
        removeStyleSheet(uri: dojo._base.Url): void;
        /**
         * Move focus to this editor
         */
        focus(): void;
        /**
         * A function for obtaining the height of the header node
         */
        getHeaderHeight(): number;
        /**
         * A function for obtaining the height of the footer node
         */
        getFooterHeight(): number;

        set(name: string, value: any): this;
        set(name: Object): this;
        get(name: string): any;

        set(name: 'disabled', value: boolean): this;
        get(name: 'value'): string;
    }

    interface RichTextConstructor extends _WidgetBaseConstructor<RichText> { }

    interface RangeIndex {
        o: number[];
        r: number[];
    }

    interface BlockAncestor {
        blockNode: Node;
        blockContainer: Node;
    }

    /**
     * W3C range API
     */
    interface range {
        BlockTagNames: RegExp;

        getIndex(node: Node, parent: Node): RangeIndex;
        getNode(index: number[], parent: Node): Node;
        getCommonAncestor(n1: Node, n2: Node, root: Node): Node;
        getAncestor(node: Node, regex?: RegExp, root?: Node): Node;
        getBlockAncestor(node: Node, regex?: RegExp, root?: Node): BlockAncestor;
        atBeginningOfContainer(container: Node, node: Node, offset: number): boolean;
        atEndOfContainer(container: Node, node: Node, offset: number): boolean;
        adjacentNoneTextNode(startnode: Node, next: 'nextSibling' | 'previousSibling'): Object[];
        create(win: Window): Range;
        getSelection(win: Window, ignoreUpdate?: boolean): Selection;
    }
}

declare namespace dijit._editor.plugins {
    /**
     * This plugin is required for Editors in auto-expand mode.
	 * It handles the auto-expansion as the user adds/deletes text,
	 * and keeps the editor's toolbar visible even when the top of the editor
	 * has scrolled off the top of the viewport (usually when editing a long
	 * document).
     */
    interface AlwaysShowToolbar extends _Plugin {

    }

    interface AlwaysShowToolbarConstructor extends dojo._base.DeclareConstructor<AlwaysShowToolbar> { }

    /**
     * This plugin tries to make all browsers behave consistently with regard to
	 * how ENTER behaves in the editor window.  It traps the ENTER key and alters
	 * the way DOM is constructed in certain cases to try to commonize the generated
	 * DOM and behaviors across browsers.
     */
    interface EnterKeyHandling extends _Plugin {
        /**
         * This property decides the behavior of Enter key. It can be either P,
	     * DIV, BR, or empty (which means disable this feature). Anything else
		 * will trigger errors.  The default is 'BR'
         */
        blockNodeForEnter: string;
    }

    interface EnterKeyHandlingConstructor extends dojo._base.DeclareConstructor<EnterKeyHandling> { }

    /**
     * This plugin provides three drop downs for setting style in the editor
	 * (font, font size, and format block), as controlled by command.
     */
    interface FontChoice extends _Plugin {
        
    }

    interface FontChoiceConstructor extends dojo._base.DeclareConstructor<FontChoice> { }

    /**
     * This plugin provides FullScreen capability to the editor.  When
	 * toggled on, it will render the editor into the full window and
	 * overlay everything.  It also binds to the hotkey: CTRL-SHIFT-F11
	 * for toggling fullscreen mode.
     */
    interface FullScreen extends _Plugin {
        /**
         * zIndex value used for overlaying the full page.
		 * default is 500.
         */
        zIndex: number;
        /**
         * Read-Only variable used to denote of the editor is in fullscreen mode or not.
         */
        isFullScreen: boolean;

        /**
         * Function to allow programmatic toggling of the view.
         */
        toggle(): void;
    }

    interface FullScreenConstructor extends dojo._base.DeclareConstructor<FullScreen> { }

    /**
     * This plugin provides the basis for an 'anchor' (link) dialog and an extension of it
	 * provides the image link dialog.
     */
    interface LinkDialog extends _Plugin {
        
    }

    interface LinkDialogConstructor extends dojo._base.DeclareConstructor<LinkDialog> { }

    /**
     * This plugin provides a simple 'new page' capability.  In other
	 * words, set content to some default user defined string.
     */
    interface NewPage extends _Plugin {
        /**
         * The default content to insert into the editor as the new page.
		 * The default is the `<br>` tag, a single blank line.
         */
        content: string;
    }

    interface NewPageConstructor extends dojo._base.DeclareConstructor<NewPage> { }

    /**
     * This plugin provides Print capability to the editor.  When
	 * clicked, the document in the editor frame will be printed.
     */
    interface Print extends _Plugin {
        
    }

    interface PrintConstructor extends dojo._base.DeclareConstructor<Print> { }

    /**
     * This plugin is used to allow the use of the tab and shift-tab keys
	 * to indent/outdent list items.  This overrides the default behavior
	 * of moving focus from/to the toolbar
     */
    interface TabIndent extends _Plugin {
        
    }

    interface TabIndentConstructor extends dojo._base.DeclareConstructor<TabIndent> { }

    /**
     * This plugin provides dropdown color pickers for setting text color and background color
     */
    interface TextColor extends _Plugin {
        /**
         * The color picker dijit to use, defaults to dijit/ColorPalette
         */
        colorPicker: string | dojo.GenericConstructor<dijit._WidgetBase>;
    }

    interface TextColorConstructor extends dojo._base.DeclareConstructor<TextColor> { }

    /**
     * This plugin is used to toggle direction of the edited document,
	 * independent of what direction the whole page is.
     */
    interface ToggleDir extends _Plugin {
        
    }

    interface ToggleDirConstructor extends dojo._base.DeclareConstructor<ToggleDir> { }

    /**
     * This plugin provides a simple view source capability.  When view
	 * source mode is enabled, it disables all other buttons/plugins on the RTE.
	 * It also binds to the hotkey: CTRL-SHIFT-F11 for toggling ViewSource mode.
     */
    interface ViewSource extends _Plugin {
        /**
         * Boolean flag used to indicate if script tags should be stripped from the document.
		 * Defaults to true.
         */
        stripScripts: boolean;
        /**
         * Boolean flag used to indicate if comment tags should be stripped from the document.
		 * Defaults to true.
         */
        stripComments: boolean;
        /**
         * Boolean flag used to indicate if iframe tags should be stripped from the document.
		 * Defaults to true.
         */
        stripIFrames: boolean;
        /**
         * Boolean flag used to indicate if the source view should be readonly or not.
		 * Cannot be changed after initialization of the plugin.
		 * Defaults to false.
         */
        readOnly: boolean;
    }

    interface ViewSourceConstructor extends dojo._base.DeclareConstructor<ViewSource> { }
}

declare namespace dijit {
    /**
     * A rich text Editing widget
     * 
     * This widget provides basic WYSIWYG editing features, based on the browser's
	 * underlying rich text editing capability, accompanied by a toolbar (`dijit.Toolbar`).
	 * A plugin model is available to extend the editor's capabilities as well as the
	 * the options available in the toolbar.  Content generation may vary across
	 * browsers, and clipboard operations may have different results, to name
	 * a few limitations.  Note: this widget should not be used with the HTML
	 * &lt;TEXTAREA&gt; tag -- see dijit/_editor/RichText for details.
     */
    interface Editor extends dijit._editor.RichText {
        /**
         * A list of plugin names (as strings) or instances (as objects)
		 * for this widget.
         */
        plugins: (string | dijit._editor._Plugin)[];
        /**
         * A list of extra plugin names which will be appended to plugins array
         */
        extraPlugins: (string | Plugin)[];
        /**
         * Whether we shall use custom undo/redo support instead of the native
		 * browser support. By default, we now use custom undo.  It works better
		 * than native browser support and provides a consistent behavior across
		 * browsers with a minimal performance hit.  We already had the hit on
		 * the slowest browser, IE, anyway.
         */
        customUndo: boolean;
        /**
         * When using customUndo, not every keystroke will be saved as a step.
		 * Instead typing (including delete) will be grouped together: after
		 * a user stops typing for editActionInterval seconds, a step will be
		 * saved; if a user resume typing within editActionInterval seconds,
		 * the timeout will be restarted. By default, editActionInterval is 3
		 * seconds.
         */
        editActionInterval: number;

        /**
         * takes a plugin name as a string or a plugin instance and
		 * adds it to the toolbar and associates it with this editor
		 * instance. The resulting plugin is added to the Editor's
		 * plugins array. If index is passed, it's placed in the plugins
		 * array at that index. No big magic, but a nice helper for
		 * passing in plugin names via markup.
         * @param plugin String, args object, plugin instance, or plugin constructor
         * @param index Used when creating an instance from
		 * something already in this.plugins. Ensures that the new
		 * instance is assigned to this.plugins at that index.
         */
        addPlugin(plugin: string | dijit._editor._Plugin | dijit._editor._PluginConstructor, index?: number): void;
        onBeforeActivate(): void;
        onBeforeDeactivate(e: UIEvent): void;

        set(name: string, value: any): this;
        set(name: Object): this;

        set(name: 'disabled', value: boolean): this;
    }

    interface EditorConstructor extends _WidgetBaseConstructor<Editor> { }
}