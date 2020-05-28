declare namespace Tieba.DataFieldTypes {
    interface DataField {
        author:  Author;
        content: Content;
    }
    
    interface Author {
        user_id:       number;
        user_name:     string;
        props:         null;
        portrait:      string;
        user_nickname: null;
    }
    
    interface Content {
        post_id:     number;
        is_anonym:   boolean;
        forum_id:    number;
        thread_id:   number;
        content:     string;
        post_no:     number;
        type:        string;
        comment_num: number;
        is_fold:     number;
        props:       null;
        post_index:  number;
        pb_tpoint:   null;
    }
    
}