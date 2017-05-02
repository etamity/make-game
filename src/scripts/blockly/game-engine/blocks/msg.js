// Lists Blocks.
/// url - Information on empty object.

Blockly.Msg.OBJECT_CREATE_TITLE = 'object';

Blockly.Msg.OBJECT_CREATE_EMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-empty-object';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-object https://github.com/google/blockly/wiki/Lists#create-empty-object].
Blockly.Msg.OBJECT_CREATE_EMPTY_TITLE = 'create empty object';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-empty-object https://github.com/google/blockly/wiki/Lists#create-empty-object].
Blockly.Msg.OBJECT_CREATE_EMPTY_TOOLTIP = 'Returns a object, of length 0, containing no data records';

/// url - Information on building object.
Blockly.Msg.OBJECT_CREATE_WITH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-object-with';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#create-object-with https://github.com/google/blockly/wiki/Lists#create-object-with].
Blockly.Msg.OBJECT_CREATE_WITH_TOOLTIP = 'Create a object with any number of items.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-object-with https://github.com/google/blockly/wiki/Lists#create-object-with].
Blockly.Msg.OBJECT_CREATE_WITH_INPUT_WITH = 'create object with';
/// block text - This appears in a sub-block when [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs changing the number of inputs in a ''''create object with'''' block].\n{{Identical|List}}
Blockly.Msg.OBJECT_CREATE_WITH_CONTAINER_TITLE_ADD = 'properties';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.OBJECT_CREATE_WITH_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this object block.';
Blockly.Msg.OBJECT_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs https://github.com/google/blockly/wiki/Lists#changing-number-of-inputs].
Blockly.Msg.OBJECT_CREATE_WITH_ITEM_TOOLTIP = 'Add an item to the object.';

/// url - Information about [https://github.com/google/blockly/wiki/Lists#create-object-with creating a object with multiple copies of a single item].
Blockly.Msg.OBJECT_REPEAT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#create-object-with';
/// url - See [https://github.com/google/blockly/wiki/Lists#create-object-with creating a object with multiple copies of a single item].
Blockly.Msg.OBJECT_REPEAT_TOOLTIP = 'Creates a object consisting of the given value repeated the specified number of times.';
/// block text - See [https://github.com/google/blockly/wiki/Lists#create-object-with
/// https://github.com/google/blockly/wiki/Lists#create-object-with].
///\n\nParameters:\n* %1 - the item (text) to be repeated\n* %2 - the number of times to repeat it
Blockly.Msg.OBJECT_REPEAT_TITLE = 'create object with item %1 repeated %2 times';

/// url - Information about how the length of a object is computed (i.e., by the total number of elements, not the number of different elements).
Blockly.Msg.OBJECT_LENGTH_HELPURL = 'https://github.com/google/blockly/wiki/Lists#length-of';
/// block text - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of].
/// \n\nParameters:\n* %1 - the object whose length is desired
Blockly.Msg.OBJECT_LENGTH_TITLE = 'length of %1';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#length-of https://github.com/google/blockly/wiki/Lists#length-of Blockly:Lists:length of].
Blockly.Msg.OBJECT_LENGTH_TOOLTIP = 'Returns the length of a object.';

/// url - See [https://github.com/google/blockly/wiki/Lists#is-empty https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.OBJECT_ISEMPTY_HELPURL = 'https://github.com/google/blockly/wiki/Lists#is-empty';
/// block text - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
/// \n\nParameters:\n* %1 - the object to test
Blockly.Msg.OBJECT_ISEMPTY_TITLE = '%1 is empty';
/// block tooltip - See [https://github.com/google/blockly/wiki/Lists#is-empty
/// https://github.com/google/blockly/wiki/Lists#is-empty].
Blockly.Msg.OBJECT_ISEMPTY_TOOLTIP = 'Returns true if the object is empty.';

/// block text - Title of blocks operating on [https://github.com/google/blockly/wiki/Lists object].
Blockly.Msg.OBJECT_INLIST = 'in object';

/// url - See [https://github.com/google/blockly/wiki/Lists#getting-items-from-a-object
/// https://github.com/google/blockly/wiki/Lists#getting-items-from-a-object].
Blockly.Msg.OBJECT_INDEX_OF_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-items-from-a-object';
Blockly.Msg.OBJECT_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.OBJECT_INLIST;
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-object
/// Lists#finding-items-in-a-object].
/// [[File:Blockly-object-find.png]]
Blockly.Msg.OBJECT_INDEX_OF_FIRST = 'find first occurrence of item';
/// dropdown - See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-object
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-object].
/// [[File:Blockly-object-find.png]]
Blockly.Msg.OBJECT_INDEX_OF_LAST = 'find last occurrence of item';
/// tooltip - %1 will be replaced by either the number 0 or -1 depending on the indexing mode.  See [https://github.com/google/blockly/wiki/Lists#finding-items-in-a-object
/// https://github.com/google/blockly/wiki/Lists#finding-items-in-a-object].
/// [[File:Blockly-object-find.png]]
Blockly.Msg.OBJECT_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence of the item in the object. Returns %1 if item is not found.';

Blockly.Msg.OBJECT_GET_INDEX_HELPURL = Blockly.Msg.OBJECT_INDEX_OF_HELPURL;
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get an item from a object] without removing it from the object.
Blockly.Msg.OBJECT_GET_INDEX_GET = 'get';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// get and remove an item from a object], as opposed to merely getting
/// it without modifying the object.
Blockly.Msg.OBJECT_GET_INDEX_GET_REMOVE = 'get and remove';
/// dropdown - Indicates that the user wishes to
/// [https://github.com/google/blockly/wiki/Lists#removing-an-item
/// remove an item from a object].\n{{Identical|Remove}}
Blockly.Msg.OBJECT_GET_INDEX_REMOVE = 'remove';
/// dropdown - Indicates that an index relative to the front of the object should be used to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item get and/or remove
/// an item from a object].  Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
/// [[File:Blockly-object-get-item.png]]
Blockly.Msg.OBJECT_GET_INDEX_FROM_START = '#';
/// dropdown - Indicates that an index relative to the end of the object should be used
/// to [https://github.com/google/blockly/wiki/Lists#getting-a-single-item access an item in a object].
/// [[File:Blockly-object-get-item.png]]
Blockly.Msg.OBJECT_GET_INDEX_FROM_END = '# from end';
/// dropdown - Indicates that the '''first''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a object].
/// [[File:Blockly-object-get-item.png]]
Blockly.Msg.OBJECT_GET_INDEX_FIRST = 'first';
/// dropdown - Indicates that the '''last''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a object].
/// [[File:Blockly-object-get-item.png]]
Blockly.Msg.OBJECT_GET_INDEX_LAST = 'last';
/// dropdown - Indicates that a '''random''' item should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item accessed in a object].
/// [[File:Blockly-object-get-item.png]]
Blockly.Msg.OBJECT_GET_INDEX_RANDOM = 'random';
/// block text - Text that should go after the rightmost block/dropdown when
/// [https://github.com/google/blockly/wiki/Lists#getting-a-single-item
/// accessing an item from a object].  In most languages, this will be the empty string.
/// [[File:Blockly-object-get-item.png]]
Blockly.Msg.OBJECT_GET_INDEX_TAIL = '';
Blockly.Msg.OBJECT_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.OBJECT_INLIST;
/// tooltip - Indicates the ordinal number that the first item in a object is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.OBJECT_INDEX_FROM_START_TOOLTIP = '%1 is the first item.';
/// tooltip - Indicates the ordinal number that the last item in a object is referenced by.  %1 will be replaced by either "#0" or "#1" depending on the indexing mode.
Blockly.Msg.OBJECT_INDEX_FROM_END_TOOLTIP = '%1 is the last item.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_FROM = 'Returns the item at the specified position in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_FIRST = 'Returns the first item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_LAST = 'Returns the last item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for more information.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_RANDOM = 'Returns a random item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = 'Removes and returns the item at the specified position in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = 'Removes and returns the first item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = 'Removes and returns the last item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = 'Removes and returns a random item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for '#' or '# from end'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_REMOVE_FROM = 'Removes the item at the specified position in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'first'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_REMOVE_FIRST = 'Removes the first item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'last'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_REMOVE_LAST = 'Removes the last item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-and-removing-an-item] (for remove and return) and [https://github.com/google/blockly/wiki/Lists#getting-a-single-item] for 'random'.
Blockly.Msg.OBJECT_GET_INDEX_TOOLTIP_REMOVE_RANDOM = 'Removes a random item in a object.';
/// url - Information about putting items in object.
Blockly.Msg.OBJECT_SET_INDEX_HELPURL = 'https://github.com/google/blockly/wiki/Lists#in-object--set';
Blockly.Msg.OBJECT_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.OBJECT_INLIST;
/// block text - [https://github.com/google/blockly/wiki/Lists#in-object--set
/// Replaces an item in a object].
/// [[File:Blockly-in-object-set-insert.png]]
Blockly.Msg.OBJECT_SET_INDEX_SET = 'set';
/// block text - [https://github.com/google/blockly/wiki/Lists#in-object--insert-at
/// Inserts an item into a object].
/// [[File:Blockly-in-object-set-insert.png]]
Blockly.Msg.OBJECT_SET_INDEX_INSERT = 'insert at';
/// block text - The word(s) after the position in the object and before the item to be set/inserted.
/// [[File:Blockly-in-object-set-insert.png]]
Blockly.Msg.OBJECT_SET_INDEX_INPUT_TO = 'as';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_SET_FROM = 'Sets the item at the specified position in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_SET_FIRST = 'Sets the first item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_SET_LAST = 'Sets the last item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "set" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_SET_RANDOM = 'Sets a random item in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_INSERT_FROM = 'Inserts the item at the specified position in a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_INSERT_FIRST = 'Inserts the item at the start of a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_INSERT_LAST = 'Append the item to the end of a object.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-single-item} (even though the page describes the "get" block, the idea is the same for the "insert" block).
Blockly.Msg.OBJECT_SET_INDEX_TOOLTIP_INSERT_RANDOM = 'Inserts the item randomly in a object.';

/// url - Information describing extracting a subobject from an existing object.
Blockly.Msg.OBJECT_GET_SUBLIST_HELPURL = 'https://github.com/google/blockly/wiki/Lists#getting-a-subobject';
Blockly.Msg.OBJECT_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.OBJECT_INLIST;
/// dropdown - Indicates that an index relative to the front of the object should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-subobject get a subobject].
/// [[File:Blockly-get-subobject.png]]
/// Note: If {{msg-Blockly|ORDINAL_NUMBER_SUFFIX}} is defined, it will
/// automatically appear ''after'' this number (and any other ordinal numbers on this block).
/// See [[Translating:Blockly#Ordinal_numbers]] for more information on ordinal numbers in Blockly.
Blockly.Msg.OBJECT_GET_SUBLIST_START_FROM_START = 'get sub-object from #';
/// dropdown - Indicates that an index relative to the end of the object should be used
/// to specify the beginning of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-subobject get a subobject].
Blockly.Msg.OBJECT_GET_SUBLIST_START_FROM_END = 'get sub-object from # from end';
/// dropdown - Indicates that the
/// [https://github.com/google/blockly/wiki/Lists#getting-a-subobject subobject to extract]
/// should begin with the object's first item.
Blockly.Msg.OBJECT_GET_SUBLIST_START_FIRST = 'get sub-object from first';
/// dropdown - Indicates that an index relative to the front of the object should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-subobject get a subobject].
/// [[File:Blockly-get-subobject.png]]
Blockly.Msg.OBJECT_GET_SUBLIST_END_FROM_START = 'to #';
/// dropdown - Indicates that an index relative to the end of the object should be
/// used to specify the end of the range from which to
/// [https://github.com/google/blockly/wiki/Lists#getting-a-subobject get a subobject].
/// [[File:Blockly-get-subobject.png]]
Blockly.Msg.OBJECT_GET_SUBLIST_END_FROM_END = 'to # from end';
/// dropdown - Indicates that the '''last''' item in the given object should be
/// [https://github.com/google/blockly/wiki/Lists#getting-a-subobject the end
/// of the selected subobject].
/// [[File:Blockly-get-subobject.png]]
Blockly.Msg.OBJECT_GET_SUBLIST_END_LAST = 'to last';
/// block text - This appears in the rightmost position ("tail") of the
/// subobject block, as described at
/// [https://github.com/google/blockly/wiki/Lists#getting-a-subobject
/// https://github.com/google/blockly/wiki/Lists#getting-a-subobject].
/// In English and most other languages, this is the empty string.
/// [[File:Blockly-get-subobject.png]]
Blockly.Msg.OBJECT_GET_SUBLIST_TAIL = '';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#getting-a-subobject
/// https://github.com/google/blockly/wiki/Lists#getting-a-subobject] for more information.
/// [[File:Blockly-get-subobject.png]]
Blockly.Msg.OBJECT_GET_SUBLIST_TOOLTIP = 'Creates a copy of the specified portion of a object.';

/// url - Information describing sorting a object.
Blockly.Msg.OBJECT_SORT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#sorting-a-object';
/// Sort as type %1 (numeric or alphabetic) in order %2 (ascending or descending) a object of items %3.\n{{Identical|Sort}}
Blockly.Msg.OBJECT_SORT_TITLE = 'sort %1 %2 %3';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#sorting-a-object].
Blockly.Msg.OBJECT_SORT_TOOLTIP = 'Sort a copy of a object.';
/// sorting order or direction from low to high value for numeric, or A-Z for alphabetic.\n{{Identical|Ascending}}
Blockly.Msg.OBJECT_SORT_ORDER_ASCENDING = 'ascending';
/// sorting order or direction from high to low value for numeric, or Z-A for alphabetic.\n{{Identical|Descending}}
Blockly.Msg.OBJECT_SORT_ORDER_DESCENDING = 'descending';
/// sort by treating each item as a number.
Blockly.Msg.OBJECT_SORT_TYPE_NUMERIC = 'numeric';
/// sort by treating each item alphabetically, case-sensitive.
Blockly.Msg.OBJECT_SORT_TYPE_TEXT = 'alphabetic';
/// sort by treating each item alphabetically, ignoring differences in case.
Blockly.Msg.OBJECT_SORT_TYPE_IGNORECASE = 'alphabetic, ignore case';

/// url - Information describing splitting text into a object, or joining a object into text.
Blockly.Msg.OBJECT_SPLIT_HELPURL = 'https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-object';
/// dropdown - Indicates that text will be split up into a object (e.g. "a-b-c" -> ["a", "b", "c"]).
Blockly.Msg.OBJECT_SPLIT_LIST_FROM_TEXT = 'make object from text';
/// dropdown - Indicates that a object will be joined together to form text (e.g. ["a", "b", "c"] -> "a-b-c").
Blockly.Msg.OBJECT_SPLIT_TEXT_FROM_LIST = 'make text from object';
/// block text - Prompts for a letter to be used as a separator when splitting or joining text.
Blockly.Msg.OBJECT_SPLIT_WITH_DELIMITER = 'with delimiter';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-object-from-text
/// https://github.com/google/blockly/wiki/Lists#make-object-from-text] for more information.
Blockly.Msg.OBJECT_SPLIT_TOOLTIP_SPLIT = 'Split text into a object of texts, breaking at each delimiter.';
/// tooltip - See [https://github.com/google/blockly/wiki/Lists#make-text-from-object
/// https://github.com/google/blockly/wiki/Lists#make-text-from-object] for more information.
Blockly.Msg.OBJECT_SPLIT_TOOLTIP_JOIN = 'Join a object of texts into one text, separated by a delimiter.';
