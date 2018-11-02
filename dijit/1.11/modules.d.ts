/// <reference path="index.d.ts" />

declare module 'dijit/_Widget' {
	type _Widget = dijit._Widget;
	const _Widget: dijit._WidgetBaseConstructor<_Widget>;
	export = _Widget;
}

declare module 'dijit/_WidgetBase' {
	type _WidgetBase = dijit._WidgetBase;
	const _WidgetBase: dijit._WidgetBaseConstructor<_WidgetBase>;
	export = _WidgetBase;
}

declare module 'dijit/_AttachMixin' {
	type _AttachMixin = dijit._AttachMixin;
	const _AttachMixin: dijit._AttachMixinConstructor;
	export = _AttachMixin;
}

declare module 'dijit/_CssStateMixin' {
	type _CssStateMixin = dijit._CssStateMixin;
	const _CssStateMixin: dijit._CssStateMixinConstructor;
	export = _CssStateMixin;
}

declare module 'dijit/_ConfirmDialogMixin' {
	type _ConfirmDialogMixin = dijit._ConfirmDialogMixin;
	const _ConfirmDialogMixin: dijit._ConfirmDialogMixinConstructor;
	export = _ConfirmDialogMixin;
}

declare module 'dijit/_Contained' {
	type _Contained = dijit._Contained;
	const _Contained: dijit._ContainedConstructor;
	export = _Contained;
}

declare module 'dijit/_Container' {
	type _Container = dijit._Container;
	const _Container: dijit._ContainerConstructor;
	export = _Container;
}

declare module 'dijit/_DialogMixin' {
	type _DialogMixin = dijit._DialogMixin;
	const _DialogMixin: dijit._DialogMixinConstructor;
	export = _DialogMixin;
}

declare module 'dijit/_FocusMixin' {
	type _FocusMixin = dijit._FocusMixin;
	const _FocusMixin: dijit._FocusMixinConstructor;
	export = _FocusMixin;
}

declare module 'dijit/_HasDropDown' {
	type _HasDropDown<T extends dijit._WidgetBase> = dijit._HasDropDown<T>;
	const _HasDropDown: dijit._HasDropDownConstructor<dijit._WidgetBase>;
	export = _HasDropDown;
}

declare module 'dijit/_KeyNavContainer' {
	type _KeyNavContainer = dijit._KeyNavContainer;
	const _KeyNavContainer: dijit._KeyNavContainerConstructor;
	export = _KeyNavContainer;
}

declare module 'dijit/_KeyNavMixin' {
	type _KeyNavMixin = dijit._KeyNavMixin;
	const _KeyNavMixin: dijit._KeyNavMixinConstructor;
	export = _KeyNavMixin;
}

declare module 'dijit/_MenuBase' {
	type _MenuBase = dijit._MenuBase;
	const _MenuBase: dijit._MenuBaseConstructor;
	export = _MenuBase;
}

declare module 'dijit/_PaletteMixin' {
	type _PaletteMixin = dijit._PaletteMixin;
	const _PaletteMixin: dijit._PaletteMixinConstructor;
	export = _PaletteMixin;
}

declare module 'dijit/_TemplatedMixin' {
	type _TemplatedMixin = dijit._TemplatedMixin;
	const _TemplatedMixin: dijit._TemplatedMixinConstructor;
	export = _TemplatedMixin;
}

declare module 'dijit/_WidgetsInTemplateMixin' {
	type _WidgetsInTemplateMixin = dijit._WidgetsInTemplateMixin;
	const _WidgetsInTemplateMixin: dijit._WidgetsInTemplateMixinConstructor;
	export = _WidgetsInTemplateMixin;
}

declare module 'dijit/_editor/_Plugin' {
	type _Plugin = dijit._editor._Plugin;
	const _Plugin: dijit._editor._PluginConstructor;
	export = _Plugin;
}

declare module 'dijit/_editor/plugins/AlwaysShowToolbar' {
	type AlwaysShowToolbar = dijit._editor.plugins.AlwaysShowToolbar;
	const AlwaysShowToolbar: dijit._editor.plugins.AlwaysShowToolbarConstructor;
	export = AlwaysShowToolbar;
}

declare module 'dijit/_editor/plugins/EnterKeyHandling' {
	type EnterKeyHandling = dijit._editor.plugins.EnterKeyHandling;
	const EnterKeyHandling: dijit._editor.plugins.EnterKeyHandlingConstructor;
	export = EnterKeyHandling;
}

declare module 'dijit/_editor/plugins/FontChoice' {
	type FontChoice = dijit._editor.plugins.FontChoice;
	const FontChoice: dijit._editor.plugins.FontChoiceConstructor;
	export = FontChoice;
}

declare module 'dijit/_editor/plugins/FullScreen' {
	type FullScreen = dijit._editor.plugins.FullScreen;
	const FullScreen: dijit._editor.plugins.FullScreenConstructor;
	export = FullScreen;
}

declare module 'dijit/_editor/plugins/LinkDialog' {
	type LinkDialog = dijit._editor.plugins.LinkDialog;
	const LinkDialog: dijit._editor.plugins.LinkDialogConstructor;
	export = LinkDialog;
}

declare module 'dijit/_editor/plugins/NewPage' {
	type NewPage = dijit._editor.plugins.NewPage;
	const NewPage: dijit._editor.plugins.NewPageConstructor;
	export = NewPage;
}

declare module 'dijit/_editor/plugins/Print' {
	type Print = dijit._editor.plugins.Print;
	const Print: dijit._editor.plugins.PrintConstructor;
	export = Print;
}

declare module 'dijit/_editor/plugins/TabIndent' {
	type TabIndent = dijit._editor.plugins.TabIndent;
	const TabIndent: dijit._editor.plugins.TabIndentConstructor;
	export = TabIndent;
}

declare module 'dijit/_editor/plugins/TextColor' {
	type TextColor = dijit._editor.plugins.TextColor;
	const TextColor: dijit._editor.plugins.TextColorConstructor;
	export = TextColor;
}

declare module 'dijit/_editor/plugins/ToggleDir' {
	type ToggleDir = dijit._editor.plugins.ToggleDir;
	const ToggleDir: dijit._editor.plugins.ToggleDirConstructor;
	export = ToggleDir;
}

declare module 'dijit/_editor/plugins/ViewSource' {
	type ViewSource = dijit._editor.plugins.ViewSource;
	const ViewSource: dijit._editor.plugins.ViewSourceConstructor;
	export = ViewSource;
}

declare module 'dijit/_editor/html' {
	const html: dijit._editor.html;
	export = html;
}

declare module 'dijit/_editor/range' {
	const range: dijit._editor.range;
	export = range;
}

declare module 'dijit/_editor/RichText' {
	type RichText = dijit._editor.RichText;
	const RichText: dijit._editor.RichTextConstructor;
	export = RichText;
}

declare module 'dijit/a11y' {
	const a11y: dijit.a11y;
	export = a11y;
}

declare module 'dijit/a11yclick' {
	const a11yclick: dijit.a11yclick;
	export = a11yclick;
}

declare module 'dijit/ColorPalette' {
	type ColorPalette = dijit.ColorPalette;
	const ColorPalette: dijit.ColorPaletteConstructor;
	export = ColorPalette;
}

declare module 'dijit/BackgroundIframe' {
	type BackgroundIframe = dijit.BackgroundIframe;
	const BackgroundIframe: dijit.BackgroundIframeConstructor;
	export = BackgroundIframe;
}

declare module 'dijit/CheckedMenuItem' {
	type CheckedMenuItem = dijit.CheckedMenuItem;
	const CheckedMenuItem: dijit.CheckedMenuItemConstructor;
	export = CheckedMenuItem;
}

declare module 'dijit/ConfirmDialog' {
	type ConfirmDialog = dijit.ConfirmDialog;
	const ConfirmDialog: dijit.ConfirmDialogConstructor;
	export = ConfirmDialog;
}

declare module 'dijit/ConfirmTooltipDialog' {
	type ConfirmTooltipDialog = dijit.ConfirmTooltipDialog;
	const ConfirmTooltipDialog: dijit.ConfirmTooltipDialogConstructor;
	export = ConfirmTooltipDialog;
}

declare module 'dijit/Calendar' {
	type Calendar = dijit.Calendar;
	const Calendar: dijit.CalendarConstructor;
	export = Calendar;
}

declare module 'dijit/CalendarLite' {
	type CalendarLite = dijit.CalendarLite;
	const CalendarLite: dijit.CalendarLiteConstructor;
	export = CalendarLite;
}

declare module 'dijit/Declaration' {
	type Declaration = dijit.Declaration;
	const Declaration: dijit.DeclarationConstructor;
	export = Declaration;
}

declare module 'dijit/Destroyable' {
	type Destroyable = dijit.Destroyable;
	const Destroyable: dijit.DestroyableConstructor;
	export = Destroyable;
}

declare module 'dijit/Dialog' {
	type Dialog = dijit.Dialog;
	const Dialog: dijit.DialogConstructor;
	export = Dialog;
}

declare module 'dijit/DialogUnderlay' {
	type DialogUnderlay = dijit.DialogUnderlay;
	const DialogUnderlay: dijit.DialogUnderlayConstructor;
	export = DialogUnderlay;
}

declare module 'dijit/DropDownMenu' {
	type DropDownMenu = dijit.DropDownMenu;
	const DropDownMenu: dijit.DropDownMenuConstructor;
	export = DropDownMenu;
}

declare module 'dijit/Editor' {
	type Editor = dijit.Editor;
	const Editor: dijit.EditorConstructor;
	export = Editor;
}

declare module 'dijit/Fieldset' {
	type Fieldset = dijit.Fieldset;
	const Fieldset: dijit.FieldsetConstructor;
	export = Fieldset;
}

declare module 'dijit/focus' {
	const FocusManager: dijit.FocusManager;
	export = FocusManager;
}

declare module 'dijit/Menu' {
	type Menu = dijit.Menu;
	const Menu: dijit.MenuConstructor;
	export = Menu;
}

declare module 'dijit/MenuBar' {
	type MenuBar = dijit.MenuBar;
	const MenuBar: dijit.MenuBarConstructor;
	export = MenuBar;
}

declare module 'dijit/MenuBarItem' {
	type MenuBarItem = dijit.MenuBarItem;
	const MenuBarItem: dijit.MenuBarItemConstructor;
	export = MenuBarItem;
}

declare module 'dijit/MenuItem' {
	type MenuItem = dijit.MenuItem;
	const MenuItem: dijit.MenuItemConstructor;
	export = MenuItem;
}

declare module 'dijit/MenuSeparator' {
	type MenuSeparator = dijit.MenuSeparator;
	const MenuSeparator: dijit.MenuSeparatorConstructor;
	export = MenuSeparator;
}

declare module 'dijit/place' {
	const place: dijit.Place;
	export = place;
}

declare module 'dijit/popup' {
	const popup: dijit.PopupManager;
	export = popup;
}

declare module 'dijit/PopupMenuBarItem' {
	type PopupMenuBarItem = dijit.PopupMenuBarItem;
	const PopupMenuBarItem: dijit.PopupMenuBarItemConstructor;
	export = PopupMenuBarItem;
}

declare module 'dijit/PopupMenuItem' {
	type PopupMenuItem = dijit.PopupMenuItem;
	const PopupMenuItem: dijit.PopupMenuItemConstructor;
	export = PopupMenuItem;
}

declare module 'dijit/registry' {
	const registry: dijit.Registry;
	export = registry;
}

declare module 'dijit/_TimePicker' {
	type _TimePicker = dijit._TimePicker;
	const _TimePicker: dijit._TimePickerConstructor;
	export = _TimePicker;
}

declare module 'dijit/TitlePane' {
	type TitlePane = dijit.TitlePane;
	const TitlePane: dijit.TitlePaneConstructor;
	export = TitlePane;
}

declare module 'dijit/Toolbar' {
	type Toolbar = dijit.Toolbar;
	const Toolbar: dijit.ToolbarConstructor;
	export = Toolbar;
}

declare module 'dijit/ToolbarSeparator' {
	type ToolbarSeparator = dijit.ToolbarSeparator;
	const ToolbarSeparator: dijit.ToolbarSeparatorConstructor;
	export = ToolbarSeparator;
}

declare module 'dijit/Tooltip' {
	type Tooltip = dijit.Tooltip;
	const Tooltip: dijit.TooltipConstructor;
	export = Tooltip;
}

declare module 'dijit/TooltipDialog' {
	type TooltipDialog = dijit.TooltipDialog;
	const TooltipDialog: dijit.TooltipDialogConstructor;
	export = TooltipDialog;
}

declare module 'dijit/_base/focus' {
	const focus: dijit._base.Focus;
	export = focus;
}

declare module 'dijit/_base/manager' {
	const manager: dijit._base.Manager;
	export = manager;
}

declare module 'dijit/_base/place' {
	const place: dijit._base.Place;
	export = place;
}

declare module 'dijit/_base/popup' {
	const popup: dijit._base.Popup;
	export = popup;
}

declare module 'dijit/_base/scroll' {
	const scroll: dijit._base.Scroll;
	export = scroll;
}

declare module 'dijit/_base/sniff' {
	const sniff: dijit._base.Sniff;
	export = sniff;
}

declare module 'dijit/_base/typematic' {
	const typematic: dijit._base.Typematic;
	export = typematic;
}

declare module 'dijit/_base/wai' {
	const wai: dijit._base.Wai;
	export = wai;
}

declare module 'dijit/_base/window' {
	const window: dijit._base.Window;
	export = window;
}

declare module 'dijit/form/_FormMixin' {
	type _FormMixin = dijit.form._FormMixin;
	const _FormMixin: dijit.form._FormMixinConstructor;
	export = _FormMixin;
}

declare module 'dijit/form/_FormValueWidget' {
	type _FormValueWidget = dijit.form._FormValueWidget;
	const _FormValueWidget: dijit.form._FormValueWidgetConstructor;
	export = _FormValueWidget;
}

declare module 'dijit/form/_FormWidget' {
	type _FormWidget = dijit.form._FormWidget;
	const _FormWidget: dijit.form._FormWidgetConstructor;
	export = _FormWidget;
}

declare module 'dijit/form/Button' {
	type Button = dijit.form.Button;
	const Button: dijit.form.ButtonConstructor;
	export = Button;
}

declare module 'dijit/form/CheckBox' {
	type CheckBox = dijit.form.CheckBox;
	const CheckBox: dijit.form.CheckBoxConstructor;
	export = CheckBox;
}

declare module 'dijit/form/ComboBox' {
	type ComboBox = dijit.form.TextBox;
	const ComboBox: dijit.form.ComboBoxConstructor;
	export = ComboBox;
}

declare module 'dijit/form/ComboBoxMixin' {
	type ComboBoxMixin<T, U, V> = dijit.form.ComboBoxMixin<T, U, V>;
	const ComboBoxMixin: dijit.form.ComboBoxConstructor;
	export = ComboBoxMixin;
}

declare module 'dijit/form/CurrencyTextBox' {
	type CurrencyTextBox = dijit.form.CurrencyTextBox;
	const CurrencyTextBox: dijit.form.CurrencyTextBoxConstructor;
	export = CurrencyTextBox;
}

declare module 'dijit/form/DataList' {
	type DataList<T> = dijit.form.DataList<T>;
	const DataList: dijit.form.DataListConstructor;
	export = DataList;
}

declare module 'dijit/form/DateTextBox' {
	type DateTextBox = dijit.form.DateTextBox;
	const DateTextBox: dijit.form.DateTextBoxConstructor;
	export = DateTextBox;
}

declare module 'dijit/form/DropDownButton' {
	type DropDownButton<T extends dijit._WidgetBase> = dijit.form.DropDownButton<T>;
	const DropDownButton: dijit.form.DropDownButtonConstructor;
	export = DropDownButton;
}

declare module 'dijit/form/FilteringSelect' {
	type FilteringSelect<C extends dijit.form.Constraints, T extends Object, Q extends string | Object | Function, O extends dojo.store.api.QueryOptions> = dijit.form.FilteringSelect<C, T, Q, O>;
	const FilteringSelect: dijit.form.FilteringSelectConstructor;
	export = FilteringSelect;
}

declare module 'dijit/form/Form' {
	type Form = dijit.form.Form;
	const Form: dijit.form.FormConstructor;
	export = Form;
}

declare module 'dijit/form/HorizontalRule' {
	type HorizontalRule = dijit.form.HorizontalRule;
	const HorizontalRule: dijit.form.HorizontalRuleConstructor;
	export = HorizontalRule;
}

declare module 'dijit/form/HorizontalRuleLabels' {
	type HorizontalRuleLabels = dijit.form.HorizontalRuleLabels;
	const HorizontalRuleLabels: dijit.form.HorizontalRuleLabelsConstructor;
	export = HorizontalRuleLabels;
}

declare module 'dijit/form/HorizontalSlider' {
	type HorizontalSlider = dijit.form.HorizontalSlider;
	const HorizontalSlider: dijit.form.HorizontalSliderConstructor;
	export = HorizontalSlider;
}

declare module 'dijit/form/MappedTextBox' {
	type MappedTextBox<C extends dijit.form.Constraints> = dijit.form.MappedTextBox<C>;
	const MappedTextBox: dijit.form.MappedTextBoxConstructor;
	export = MappedTextBox;
}

declare module 'dijit/form/NumberSpinner' {
	type NumberSpinner = dijit.form.NumberSpinner;
	const NumberSpinner: dijit.form.NumberSpinnerConstructor;
	export = NumberSpinner;
}

declare module 'dijit/form/NumberTextBox' {
	type NumberTextBox = dijit.form.NumberTextBox;
	const NumberTextBox: dijit.form.NumberTextBoxConstructor;
	export = NumberTextBox;
}

declare module 'dijit/form/RadioButton' {
	type RadioButton = dijit.form.RadioButton;
	const RadioButton: dijit.form.RadioButtonConstructor;
	export = RadioButton;
}

declare module 'dijit/form/RangeBoundTextBox' {
	type RangeBoundTextBox = dijit.form.RangeBoundTextBox;
	const RangeBoundTextBox: dijit.form.RangeBoundTextBoxConstructor;
	export = RangeBoundTextBox;
}

declare module 'dijit/form/SimpleTextarea' {
	type SimpleTextarea = dijit.form.SimpleTextarea;
	const SimpleTextarea: dijit.form.SimpleTextareaConstructor;
	export = SimpleTextarea;
}

declare module 'dijit/form/Textarea' {
	type Textarea = dijit.form.Textarea;
	const Textarea: dijit.form.TextareaConstructor;
	export = Textarea;
}

declare module 'dijit/form/TextBox' {
	type TextBox = dijit.form.TextBox;
	const TextBox: dijit.form.TextBoxConstructor;
	export = TextBox;
}

declare module 'dijit/form/ToggleButton' {
	type ToggleButton = dijit.form.ToggleButton;
	const ToggleButton: dijit.form.ToggleButtonConstructor;
	export = ToggleButton;
}

declare module 'dijit/form/ValidationTextBox' {
	type ValidationTextBox<C extends dijit.form.Constraints> = dijit.form.ValidationTextBox<C>;
	const ValidationTextBox: dijit.form.ValidationTextBoxConstructor;
	export = ValidationTextBox;
}

declare module 'dijit/layout/_LayoutWidget' {
	type _LayoutWidget = dijit.layout._LayoutWidget;
	const _LayoutWidget: dijit.layout._LayoutWidgetConstructor;
	export = _LayoutWidget;
}

declare module 'dijit/layout/AccordionContainer' {
	type AccordionContainer = dijit.layout.AccordionContainer;
	const AccordionContainer: dijit.layout.AccordionContainerConstructor;
	export = AccordionContainer;
}

declare module 'dijit/layout/AccordionPane' {
	type AccordionPane = dijit.layout.AccordionPane;
	const AccordionPane: dijit.layout.AccordionPaneConstructor;
	export = AccordionPane;
}

declare module 'dijit/layout/ContentPane' {
	type ContentPane = dijit.layout.ContentPane;
	const ContentPane: dijit.layout.ContentPaneConstructor;
	export = ContentPane;
}

declare module 'dijit/layout/_ContentPaneResizeMixin' {
	type _ContentPaneResizeMixin = dijit.layout._ContentPaneResizeMixin;
	const _ContentPaneResizeMixin: dijit.layout._ContentPaneResizeMixinConstructor;
	export = _ContentPaneResizeMixin;
}

declare module 'dijit/layout/BorderContainer' {
	type BorderContainer = dijit.layout.BorderContainer;
	const BorderContainer: dijit.layout.BorderContainerConstructor;
	export = BorderContainer;
}

declare module 'dijit/layout/LayoutContainer' {
	type LayoutContainer = dijit.layout.LayoutContainer;
	const LayoutContainer: dijit.layout.LayoutContainerConstructor;
	export = LayoutContainer;
}

declare module 'dijit/layout/LinkPane' {
	type LinkPane = dijit.layout.LinkPane;
	const LinkPane: dijit.layout.LinkPaneConstructor;
	export = LinkPane;
}

declare module 'dijit/layout/ScrollingTabController' {
	type ScrollingTabController = dijit.layout.ScrollingTabController;
	const ScrollingTabController: dijit.layout.ScrollingTabControllerConstructor;
	export = ScrollingTabController;
}

declare module 'dijit/layout/StackContainer' {
	type StackContainer = dijit.layout.StackContainer;
	const StackContainer: dijit.layout.StackContainerConstructor;
	export = StackContainer;
}

declare module 'dijit/layout/StackController' {
	type StackController = dijit.layout.StackController;
	const StackController: dijit.layout.StackControllerConstructor;
	export = StackController;
}

declare module 'dijit/layout/TabContainer' {
	type TabContainer = dijit.layout.TabContainer;
	const TabContainer: dijit.layout.TabContainerConstructor;
	export = TabContainer;
}

declare module 'dijit/layout/TabController' {
	type TabController = dijit.layout.TabController;
	const TabController: dijit.layout.TabControllerConstructor;
	export = TabController;
}
