using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// [InitializeOnLoad]
public class Wasty
{
    static Wasty()
    {
        // EditorApplication.update += Update;
        Debug.Log("Initializing");
    }

    static void Update()
    {
        Debug.Log("Updating");
    }


    // Start is called before the first frame update
    void Start()
    {
        
    }

}
